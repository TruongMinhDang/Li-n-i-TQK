
'use server';

/**
 * @fileOverview A Text-to-Speech (TTS) flow that converts article content to audio
 * and caches it in Firebase Storage.
 *
 * - generateArticleAudio - The main function to handle audio generation and caching.
 * - GenerateArticleAudioInput - The input type for the function.
 * - GenerateArticleAudioOutput - The return type for the function.
 */

import { ai } from '@/lib/genkit-instance';
import { z } from 'zod';
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytes,
} from 'firebase/storage';
import firebaseApp from '@/lib/firebase';
import wav from 'wav';

const storage = getStorage(firebaseApp);

// Zod Schemas
const GenerateArticleAudioInputSchema = z.object({
  slug: z.string().describe('The unique slug of the article.'),
  title: z.string().describe('The title of the article.'),
  author: z.string().describe('The author of the article.'),
  content: z.string().describe('The full text content of the article.'),
});
export type GenerateArticleAudioInput = z.infer<
  typeof GenerateArticleAudioInputSchema
>;

const GenerateArticleAudioOutputSchema = z.object({
  audioUrl: z
    .string()
    .url()
    .describe('The public URL of the generated audio file.'),
  isFromCache: z
    .boolean()
    .describe('Indicates if the audio was retrieved from cache.'),
});
export type GenerateArticleAudioOutput = z.infer<
  typeof GenerateArticleAudioOutputSchema
>;

async function toWavBuffer(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });
    const bufs: any[] = [];
    writer.on('error', reject);
    writer.on('data', function (d) {
      bufs.push(d);
    });
    writer.on('end', function () {
      resolve(Buffer.concat(bufs));
    });
    writer.write(pcmData);
    writer.end();
  });
}

function expandAbbreviations(text: string): string {
    const replacements: { [key: string]: string } = {
        'THCS': 'Trung học cơ sở',
        'TNTP': 'Thiếu niên Tiền phong',
        'LĐTQK': 'Liên đội Trần Quang Khải',
        'HCM': 'Hồ Chí Minh',
        'CLB': 'Câu lạc bộ',
        'BCH': 'Ban chỉ huy',
        'TPT': 'Tổng phụ trách',
        'ĐTN': 'Đoàn Thanh niên',
        'TW': 'Trung ương',
        'TP.HCM': 'Thành phố Hồ Chí Minh',
        'TPHCM': 'Thành phố Hồ Chí Minh',
        'HS': 'học sinh',
        'GV': 'giáo viên',
        'BGH': 'Ban Giám hiệu',
        'HĐĐ': 'Hội đồng Đội',
    };

    // Use a regex with word boundaries (\b) to replace whole words only
    const regex = new RegExp(`\\b(${Object.keys(replacements).join('|')})\\b`, 'g');
    return text.replace(regex, (match) => replacements[match]);
}

const ttsFlow = ai.defineFlow(
  {
    name: 'ttsFlow',
    inputSchema: GenerateArticleAudioInputSchema,
    outputSchema: GenerateArticleAudioOutputSchema,
  },
  async (input) => {
    const { slug, title, author, content } = input;
    const storagePath = `tts-audio/${slug}.wav`;
    const storageRef = ref(storage, storagePath);

    // 1. Check if audio is already cached in Firebase Storage
    try {
      const downloadUrl = await getDownloadURL(storageRef);
      return { audioUrl: downloadUrl, isFromCache: true };
    } catch (error: any) {
      if (error.code !== 'storage/object-not-found') {
        console.error('Error checking Firebase Storage:', error);
        throw error;
      }
    }

    // 2. If not cached, expand abbreviations and generate the audio
    const expandedTitle = expandAbbreviations(title);
    const expandedContent = expandAbbreviations(content);
    
    const fullTextToRead = `Bạn đang nghe tin của Liên đội Trần Quang Khải. ${expandedTitle}. Tác giả: ${author}. ${expandedContent}. Cảm ơn bạn đã nghe tin!`;

    const { media } = await ai.generate({
      model: 'googleai/gemini-2.5-flash-preview-tts',
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Algenib' },
          },
        },
        safetySettings: [
            {
                category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
                threshold: 'BLOCK_ONLY_HIGH',
            },
            {
                category: 'HARM_CATEGORY_HATE_SPEECH',
                threshold: 'BLOCK_ONLY_HIGH',
            },
            {
                category: 'HARM_CATEGORY_HARASSMENT',
                threshold: 'BLOCK_ONLY_HIGH',
            },
            {
                category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
                threshold: 'BLOCK_ONLY_HIGH',
            }
        ]
      },
      prompt: fullTextToRead,
    });

    if (!media) {
      throw new Error('AI did not return any media.');
    }

    // 3. Convert PCM audio from AI to WAV format
    const audioBuffer = Buffer.from(
      media.url.substring(media.url.indexOf(',') + 1),
      'base64'
    );
    const wavBuffer = await toWavBuffer(audioBuffer);

    // 4. Upload the new WAV file to Firebase Storage
    await uploadBytes(storageRef, wavBuffer, { contentType: 'audio/wav' });

    // 5. Get the public URL of the uploaded file
    const downloadUrl = await getDownloadURL(storageRef);

    return { audioUrl: downloadUrl, isFromCache: false };
  }
);

export async function generateArticleAudio(
  input: GenerateArticleAudioInput
): Promise<GenerateArticleAudioOutput> {
  return ttsFlow(input);
}
