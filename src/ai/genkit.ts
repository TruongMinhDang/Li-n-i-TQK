'use server';

/**
 * @fileOverview This file re-exports the Genkit AI instance.
 * It is marked as a server-side module.
 */

import { ai } from '@/lib/genkit-instance';

// Re-exporting for server-side usage.
export { ai };
