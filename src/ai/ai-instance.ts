import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  promptDir: './prompts',
  plugins: [
    /**
     * If you don't want to use googleAI, comment out this section and
     * configure a different provider.
     *
     *  googleAI({
     *    apiKey: process.env.GOOGLE_GENAI_API_KEY,
     *  }),
     */
  ],
  /**
   * If you are not using googleAI, you will need to change this to a
   * different model that is supported by your provider.
   *
   * For example, if you are using a local model, you might set this to:
   * model: 'local/my-model',
   */
  model: 'googleai/gemini-2.0-flash',
});

