import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-vertexai';

export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.5-flash',
});
