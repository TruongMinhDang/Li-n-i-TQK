
'use server';
/**
 * @fileOverview An image generation flow.
 *
 * - generateImage - A function that handles image generation.
 * - GenerateImageInput - The input type for the function.
 * - GenerateImageOutput - The return type for the function.
 */

import { ai } from '@/lib/genkit-instance';
import { z } from 'zod';

const GenerateImageInputSchema = z.object({
  prompt: z.string().describe('The text prompt to generate an image from.'),
});
export type GenerateImageInput = z.infer<typeof GenerateImageInputSchema>;

const GenerateImageOutputSchema = z.object({
  imageUrl: z
    .string()
    .url()
    .describe(
      "The generated image as a data URI. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateImageOutput = z.infer<typeof GenerateImageOutputSchema>;

const imageGenerationFlow = ai.defineFlow(
  {
    name: 'imageGenerationFlow',
    inputSchema: GenerateImageInputSchema,
    outputSchema: GenerateImageOutputSchema,
  },
  async (input) => {
    const { media } = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: `Một bức tranh theo phong cách anime dễ thương, zui zẻ, hợp với lứa tuổi học sinh, về: ${input.prompt}`,
    });
    
    if (!media?.url) {
        throw new Error('Image generation failed to produce an image.');
    }

    return { imageUrl: media.url };
  }
);

export async function generateImage(input: GenerateImageInput): Promise<GenerateImageOutput> {
  return imageGenerationFlow(input);
}
