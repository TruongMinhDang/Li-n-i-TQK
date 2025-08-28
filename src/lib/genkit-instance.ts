/**
 * @fileOverview This file initializes and exports the Genkit AI instance.
 * This file is NOT marked with "use server" as it exports an object.
 */

import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';
import 'dotenv/config';

export const ai = genkit({
  plugins: [googleAI()],
  // The model for chatbot and other text generation tasks
  model: 'googleai/gemini-1.5-flash-latest',
});
