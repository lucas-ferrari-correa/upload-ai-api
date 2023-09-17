import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors';
import { getAllPromptsRoute } from './routes/get-all-prompts';
import { uploadVideoRoute } from './routes/upload-video';
import { createTranscriptionRoute } from './routes/create-transcription';
import { generateAICompletionRoute } from './routes/generate-ai-completion';

const app = fastify();

app.register(fastifyCors, {
  origin: '*',
  methods: ['GET', 'POST', 'HEAD', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept'],
})

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateAICompletionRoute);

app.listen({
  port: 13333
}).then(() => {
  console.log('HTTP Server Running!')
})