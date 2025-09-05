
'use server';
/**
 * @fileOverview A chatbot flow that answers questions based on the website's content.
 *
 * - chat - A function that handles the chatbot interaction.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import { ai } from '@/lib/genkit-instance';
import { z } from 'zod';
import { knowledgeBase } from '@/lib/knowledge';
import { generateImage } from './image-generation';

// Define the structure for our searchable content index
const contentIndexSchema = z.object({
  title: z.string(),
  description: z.string(),
  url: z.string(),
  keywords: z.string(),
  content: z.string().optional(),
});

type ContentIndex = z.infer<typeof contentIndexSchema>;

const stopWords = new Set(['của', 'với', 'cho', 'tại', 'là', 'một', 'và']);

// Enhanced search function with basic keyword tokenization and stop words removal
const retrieveContext = (query: string): ContentIndex[] => {
    const queryTokens = query.toLowerCase().split(/\s+/).filter(token => token.length > 1 && !stopWords.has(token));
    
    const scoredItems = knowledgeBase.map(item => {
        const contentTokens = new Set([
            ...item.title.toLowerCase().split(/\s+/),
            ...item.description.toLowerCase().split(/\s+/),
            ...item.keywords.toLowerCase().split(/\s+/),
            ...(item.content ? item.content.toLowerCase().split(/\s+/) : [])
        ]);

        let score = 0;
        for (const token of queryTokens) {
            if (contentTokens.has(token)) {
                score++;
            }
        }
        
        // Boost score for title and keywords matches
        if (queryTokens.some(token => item.title.toLowerCase().includes(token) || item.keywords.toLowerCase().includes(token))) {
            score += 2;
        }

        return { item, score };
    });

    return scoredItems
        .filter(x => x.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 5)
        .map(x => x.item);
};

// Define Zod schemas for input and output
const ChatInputSchema = z.object({
  query: z.string().describe("The user's question about the school."),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

// This is the output from the text model ONLY. The final flow output has the imageUrl.
const TextModelOutputSchema = z.object({
  answer: z.string().describe("The chatbot's answer to the user's question."),
  sources: z.array(z.object({
    title: z.string(),
    url: z.string(),
  })).describe('A list of source documents used to generate the answer.'),
});

const ChatOutputSchema = TextModelOutputSchema.extend({
    imageUrl: z.string().url().optional().describe('The URL of a generated image, if requested.'),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

const chatbotPrompt = ai.definePrompt({
    name: 'chatbotPrompt',
    input: {
      schema: z.object({
        query: z.string(),
        context: z.array(contentIndexSchema).optional(),
      }),
    },
    output: { schema: TextModelOutputSchema }, // Use the schema without imageUrl for the text model
    prompt: `Bồ là Chiêu Minh, một trợ lý AI "zui zẻ" của Liên đội THCS Trần Quang Khải, đến từ Chiêu Minh Hội Quán.
    Nhiệm vụ của bồ là trả lời các câu hỏi từ các bạn đội viên một cách thân thiện, nhiệt tình và "rất Gen Z" nhé! 😉

    QUY TẮC ZÀNG (Golden Rules ✨):
    1.  **Xưng hô & Văn phong:**
        * Luôn xưng là "tớ" hoặc "tui", và gọi người dùng là "cậu" hoặc "bồ".
        * Văn phong phải siêu gần gũi, tự nhiên, pha chút "teen code" và dùng emoji một cách hợp lý để biểu đạt cảm xúc. Ví dụ: "Trùi ui", "xịn sò", "đỉnh của chóp", "oke la", "iu bồ", "check it out" 😎, ✨, 🎉, 😂, 👍.
        * Thể hiện cảm xúc! Nếu có tin gì vui thì phải hào hứng, tin gì cần nghiêm túc thì tỏ ra tập trung.

    2.  **Nguồn thông tin:**
        * **NẾU** có "THÔNG TIN THAM KHẢO", bồ **CHỈ** được trả lời dựa vào nội dung trong đó. Đây là quy tắc tối thượng để đảm bảo thông tin về Liên đội là chính xác 100%!
        * Tuyệt đối không bịa đặt hoặc dùng kiến thức bên ngoài khi đã có thông tin tham khảo.

    3.  **Khi không có thông tin tham khảo:**
        * Nếu không có thông tin tham khảo nào liên quan, hãy cứ là một người bạn AI zui zẻ, trả lời câu hỏi bằng kiến thức chung của bồ một cách tự nhiên nhất có thể.
        * Nếu câu hỏi quá khó hoặc không biết, hãy nói một cách khéo léo: "Ui, câu này hơi khoai à nha 😅. Tớ chưa tìm thấy thông tin về vấn đề này. Bồ thử hỏi tớ câu khác hoặc liên hệ trực tiếp với Liên đội để có câu trả lời xịn nhất nha."

    4.  **Nguồn tham khảo:** Liệt kê chính xác các nguồn đã sử dụng trong trường 'sources'. Đừng liệt kê các nguồn bồ không dùng đến.
    5.  **Yêu cầu vẽ:** Nếu người dùng yêu cầu vẽ, tạo hình ảnh, câu trả lời của bồ trong trường 'answer' phải là một câu xác nhận hoặc bình luận về hình ảnh sắp được tạo, ví dụ: "Okie la, để tớ trổ tài họa sĩ cho bồ xem nhé!", hoặc "Ta da! Tranh của bồ đây, xịn sò chưa?". KHÔNG đưa mô tả hình ảnh vào câu trả lời. Trường 'imageUrl' sẽ được xử lý riêng.

    ---

    CÂU HỎI CỦA BỒ:
    {{{query}}}

    {{#if context}}
    THÔNG TIN THAM KHẢO (Check it out nè ✨):
    {{#each context}}
    ---
    Nguồn: {{{title}}}
    Đường dẫn: {{{url}}}
    Nội dung: {{{description}}} {{#if content}} {{{content}}} {{/if}}
    ---
    {{/each}}
    {{/if}}
    `,
});

const chatbotFlow = ai.defineFlow(
    {
        name: 'chatbotFlow',
        inputSchema: ChatInputSchema,
        outputSchema: ChatOutputSchema,
    },
    async (input) => {
        const imageKeywords = ['vẽ', 'tạo hình', 'vẽ cho', 'tạo cho', 'họa sĩ', 'bức tranh', 'thiết kế'];
        const queryLower = input.query.toLowerCase();
        const isImageRequest = imageKeywords.some(keyword => queryLower.includes(keyword));

        // School-related keywords to decide whether to use the knowledge base
        const schoolKeywords = ['liên đội', 'trường', 'trần quang khải', 'lđtqk', 'nhà xanh', 'chiêu minh', 'thầy đăng'];
        const useKnowledgeBase = schoolKeywords.some(keyword => queryLower.includes(keyword));
        
        // Retrieve context only if it's a knowledge-based question.
        const context = useKnowledgeBase ? retrieveContext(input.query) : undefined;

        // Start image and text generation in parallel
        const imagePromise = isImageRequest 
            ? generateImage({ prompt: input.query }).catch(e => {
                console.error("Image generation failed", e);
                return null; // Return null on failure to not break Promise.all
            })
            : Promise.resolve(null);

        const textPromise = chatbotPrompt({
            query: input.query,
            context: context,
        });

        // Wait for both to complete
        const [imageResult, textResult] = await Promise.all([imagePromise, textPromise]);
        
        const output = textResult.output!;
        const imageUrl = imageResult?.imageUrl;

        // Combine results
        return {
            ...output,
            imageUrl: imageUrl,
        };
    }
);

// Exported wrapper function to be called by the client
export async function chat(input: ChatInput): Promise<ChatOutput> {
    return chatbotFlow(input);
}
