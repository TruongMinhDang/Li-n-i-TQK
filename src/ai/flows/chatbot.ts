'use server';
/**
 * @fileOverview A chatbot flow that answers questions based on the website's content.
 *
 * - chat - A function that handles the chatbot interaction.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import { z } from 'zod';


// NOTE: The AI chatbot functionality is temporarily disabled to resolve build issues.

// Define Zod schemas for input and output to maintain API contract
const ChatInputSchema = z.object({
  query: z.string().describe("The user's question about the school."),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

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


// Exported wrapper function to be called by the client
export async function chat(input: ChatInput): Promise<ChatOutput> {
    console.log("Chatbot flow is currently disabled.");
    return {
        answer: "Xin lỗi bồ, tính năng chatbot AI hiện đang được bảo trì để nâng cấp xịn hơn. Bồ vui lòng quay lại sau nhé! 🚀",
        sources: [],
    };
}
