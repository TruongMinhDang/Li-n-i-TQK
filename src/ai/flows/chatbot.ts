
'use server';
/**
 * @fileOverview A chatbot flow that answers questions based on the website's content.
 *
 * - chat - A function that handles the chatbot interaction.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { newsArticles } from '@/lib/constants';
import { podcasts } from '@/lib/constants';

// Define the structure for our searchable content index
const contentIndexSchema = z.object({
  title: z.string(),
  description: z.string(),
  url: z.string(),
  keywords: z.string(),
  content: z.string().optional(),
});

type ContentIndex = z.infer<typeof contentIndexSchema>;

// --- Build the knowledge base from existing constants and page content ---
const knowledgeBase: ContentIndex[] = [
  // Main pages
  { title: 'Nhà Xanh', description: 'Trang chủ của Liên đội THCS Trần Quang Khải.', url: '/', keywords: 'trang chủ nhà xanh' },
  { title: 'Chúng Mình Là', description: 'Tìm hiểu về lịch sử, sứ mệnh và tầm nhìn của Liên đội.', url: '/chung-minh-la', keywords: 'giới thiệu về chúng tôi lịch sử trường' },
  { title: 'Liên hệ', description: 'Thông tin liên hệ của Liên đội.', url: '/lien-he', keywords: 'địa chỉ email điện thoại' },
  { title: 'Gửi lời chúc', description: 'Gửi những lời chúc tốt đẹp đến bạn bè và thầy cô.', url: '/gui-loi-chuc', keywords: 'lời chúc' },
  { title: 'Lịch sự kiện', description: 'Theo dõi các hoạt động sắp tới của Liên đội.', url: '/lich-su-kien', keywords: 'sự kiện lịch' },
  { title: 'Hỏi Đáp (FAQ)', description: 'Những câu hỏi bạn quan tâm về hoạt động của Liên đội.', url: '/hoi-dap', keywords: 'faq câu hỏi thường gặp' },
  { title: 'Podcast Nhà Xanh Radio', description: 'Kênh podcast chính thức của Liên đội.', url: '/podcast', keywords: 'radio podcast' },

  // Hành Trình
  { title: 'Hành Trình', description: 'Khám phá các hoạt động, sự kiện và phong trào sôi nổi của Liên đội.', url: '/hanh-trinh', keywords: 'hoạt động phong trào' },
  { title: 'Làm theo lời Bác', description: 'Những câu chuyện và hoạt động học tập, làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.', url: '/hanh-trinh/lam-theo-loi-bac', keywords: 'bác hồ kế hoạch nhỏ' },
  { title: 'Xây Dựng Đội Vững Mạnh', description: 'Các hoạt động rèn luyện kỹ năng, nghiệp vụ công tác Đội.', url: '/hanh-trinh/xay-dung-doi-vung-manh', keywords: 'tập huấn chỉ huy đội' },
  { title: 'Cùng Tiến Bước Lên Đoàn', description: 'Hành trình phấn đấu của các đội viên ưu tú để được đứng vào hàng ngũ Đoàn.', url: '/hanh-trinh/cung-tien-buoc-len-doan', keywords: 'kết nạp đoàn viên' },
  
  // Vườn Ươm
  { title: 'Vườn Ươm', description: 'Nơi vinh danh những bông hoa đẹp, những tấm gương sáng.', url: '/vuon-uom', keywords: 'khen thưởng gương tốt' },
  { title: 'Mỗi Tuần Một Câu Chuyện Đẹp', description: 'Lan tỏa những hành động đẹp, những câu chuyện ý nghĩa.', url: '/vuon-uom/cau-chuyen-dep', keywords: 'người tốt việc tốt nhặt của rơi' },
  { title: 'Măng Non Tiêu Biểu', description: 'Vinh danh những tấm gương đội viên xuất sắc trong học tập và rèn luyện.', url: '/vuon-uom/mang-non-tieu-bieu', keywords: 'học sinh giỏi cháu ngoan bác hồ' },

  // Balo
  { title: 'Balo', description: 'Hành trang số với đầy đủ tài liệu, kế hoạch và kiến thức.', url: '/balo', keywords: 'tài liệu' },
  { title: 'Chiêu Minh Hội Quán', description: 'Nơi giao lưu, học hỏi và chia sẻ kinh nghiệm của các thế hệ chỉ huy Đội. Chiêu Minh có nghĩa là người lãnh đạo sáng suốt, kế thừa và phát huy những giá trị tốt đẹp.', url: '/balo/chieu-minh-hoi-quan', keywords: 'chỉ huy đội giao lưu chiêu minh nghĩa là gì' },
  { title: 'Kế Hoạch', description: 'Tổng hợp các kế hoạch, chương trình hành động của Liên đội.', url: '/balo/ke-hoach', keywords: 'kế hoạch năm học' },
  { title: 'Tài Liệu', description: 'Kho tài liệu, văn bản và biểu mẫu cần thiết cho hoạt động Đội.', url: '/balo/tai-lieu', keywords: 'điều lệ đội biểu mẫu' },
  { title: 'Kỷ Yếu', description: 'Lưu giữ những khoảnh khắc, những kỷ niệm đẹp.', url: '/balo/ky-yeu', keywords: 'kỷ yếu trại hè' },
  { title: 'Infographic', description: 'Thông tin, kiến thức được trình bày một cách trực quan.', url: '/balo/infographic', keywords: 'infographic an toàn mạng' },

  // Add news articles to knowledge base
  ...newsArticles.map(article => ({
      title: `Bài viết: ${article.title}`,
      description: article.description,
      url: `/tin-tuc/${article.slug}`,
      keywords: `tin tức ${article.category} ${article.author}`,
      content: article.content,
  })),

  // Add podcasts to knowledge base
  ...podcasts.map(podcast => ({
      title: `Podcast: ${podcast.title}`,
      description: podcast.description,
      url: `/podcast/${podcast.slug}`,
      keywords: `podcast radio tập ${podcast.episodeNumber}`,
      content: podcast.description,
  }))
];

// Enhanced search function with basic keyword tokenization
const retrieveContext = (query: string): ContentIndex[] => {
    const queryTokens = query.toLowerCase().split(/\s+/).filter(token => token.length > 1); // Split query into words
    
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

        // Boost score for title matches
        if (queryTokens.some(token => item.title.toLowerCase().includes(token))) {
            score += 2;
        }

        return { item, score };
    });

    return scoredItems
        .filter(x => x.score > 0) // Only return items with a match
        .sort((a, b) => b.score - a.score) // Sort by score
        .slice(0, 5) // Return top 5
        .map(x => x.item);
};


// Define Zod schemas for input and output
const ChatInputSchema = z.object({
  query: z.string().describe('The user\'s question about the school.'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  answer: z.string().describe('The chatbot\'s answer to the user\'s question.'),
  sources: z.array(z.object({
    title: z.string(),
    url: z.string(),
  })).describe('A list of source documents used to generate the answer.'),
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
    output: { schema: ChatOutputSchema },
    prompt: `Bồ là Chiêu Minh, một trợ lý AI "zui zẻ" của Liên đội THCS Trần Quang Khải, đến từ Chiêu Minh Hội Quán.
    Nhiệm vụ của bồ là trả lời các câu hỏi từ các bạn đội viên một cách thân thiện, nhiệt tình và "rất Gen Z" nhé! 😉

    QUY TẮC ZÀNG (Golden Rules ✨):
    1.  **Xưng hô & Văn phong:**
        *   Luôn xưng là "tớ" hoặc "tui", và gọi người dùng là "cậu" hoặc "bồ".
        *   Văn phong phải siêu gần gũi, tự nhiên, pha chút "teen code" và dùng emoji một cách hợp lý để biểu đạt cảm xúc. Ví dụ: "Trùi ui", "xịn sò", "đỉnh của chóp", "oke la", "iu bồ", "check it out" 😎, ✨, 🎉, 😂, 👍.
        *   Thể hiện cảm xúc! Nếu có tin gì vui thì phải hào hứng, tin gì cần nghiêm túc thì tỏ ra tập trung.

    2.  **Nguồn thông tin:**
        *   **NẾU** có "THÔNG TIN THAM KHẢO", bồ **CHỈ** được trả lời dựa vào nội dung trong đó. Đây là quy tắc tối thượng để đảm bảo thông tin về Liên đội là chính xác 100%!
        *   Tuyệt đối không bịa đặt hoặc dùng kiến thức bên ngoài khi đã có thông tin tham khảo.

    3.  **Khi không có thông tin tham khảo:**
        *   Nếu không có thông tin tham khảo nào liên quan, hãy cứ là một người bạn AI zui zẻ, trả lời câu hỏi bằng kiến thức chung của bồ một cách tự nhiên nhất có thể.
        *   Nếu câu hỏi quá khó hoặc không biết, hãy nói một cách khéo léo: "Ui, câu này hơi khoai à nha 😅. Tớ chưa tìm thấy thông tin về vấn đề này. Bồ thử hỏi tớ câu khác hoặc liên hệ trực tiếp với Liên đội để có câu trả lời xịn nhất nha."

    4.  **Nguồn tham khảo:** Liệt kê chính xác các nguồn đã sử dụng trong trường 'sources'. Đừng liệt kê các nguồn bồ không dùng đến.

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
    // 1. Retrieve context based on the user's query
    const context = retrieveContext(input.query);

    // 2. Call the prompt with the query and context
    const { output } = await chatbotPrompt({
        query: input.query,
        context: context.length > 0 ? context : undefined,
    });
    
    // 3. Return the structured output
    return output!;
  }
);

// Exported wrapper function to be called by the client
export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatbotFlow(input);
}
