import OpenAI from 'openai' ;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function explainCode(code: string, language: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo' ,
      messages: [
        {
          role: 'system' ,
          content: `You are a helpful coding assistant. Explain the given ${language} code in a clear, concise manner. Focus on what the code does, how it works, and any important concepts or patterns used.`,
        },
        {
          role: 'user',
          content: `Please explain this ${language} code:\n\n${code}`,
        },
      ],
      max_tokens: 1000,
      temperature: 0.7,
    });

    return response.choices[0]?.message?.content || 'Unable to generate explanation';
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new Error('Failed to generate code explanation');
  }
}