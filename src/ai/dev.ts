
'use server';

import { genkit, configureGenkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';
import 'dotenv/config';

// Cấu hình Genkit để sử dụng trong môi trường dev
// logLevel: 'debug' sẽ giúp hiển thị chi tiết các bước thực thi của flow
// trong terminal, rất hữu ích cho việc gỡ lỗi.
configureGenkit({
  plugins: [googleAI()],
  logLevel: 'debug',
  enableTracingAndMetrics: true, // Bật tính năng theo dõi và đo lường
});

// Import các flows để chúng được đăng ký và có thể sử dụng.
// Các file này chứa các flow được định nghĩa với ai.defineFlow()
import './flows/chatbot';
import './flows/tts';
import './flows/image-generation';
