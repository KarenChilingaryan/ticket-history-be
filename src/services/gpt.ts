import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure you have this key in your .env file
});

export const analyzeMessages = async (messages) => {
  const prompt = `Detect security issue phrases in the following messages: ${messages.map(msg => msg.message).join('\n')}`;
  const response = await openai.completions.create({
    model: 'gpt-3.5-turbo',
    prompt: prompt,
    max_tokens: 150,
  });
  return response.choices[0].text.trim();
};
