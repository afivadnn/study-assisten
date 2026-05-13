import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { messages, mode, subject, customSubject } = await req.json();

    // Build system prompt based on mode and subject
    const basePrompt = "You are an AI tutor helping students learn. Be clear, patient, and educational. Respond in Indonesian.";
    
    let modePrompt = "";
    if (mode === "explain") {
      modePrompt = " Explain concepts step-by-step. Use examples. Ask if they understand before moving on.";
    } else if (mode === "quiz") {
      modePrompt = " Generate a multiple choice question with 4 options (A, B, C, D). Format your response as JSON with structure: { question: string, options: { A: string, B: string, C: string, D: string }, correctAnswer: string, explanation: string }. After the user answers, provide feedback and explanation.";
    }

    let subjectContext = "";
    if (subject === "Other" && customSubject) {
      subjectContext = ` Teaching about ${customSubject}.`;
    } else if (subject !== "Other") {
      subjectContext = ` Teaching ${subject} in Indonesian.`;
    }

    const systemPrompt = basePrompt + modePrompt + subjectContext;

    // Prepare messages with system prompt
    const apiMessages = [
      { role: "system", content: systemPrompt },
      ...messages.slice(-10), // Keep last 10 messages for context
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: apiMessages,
      temperature: 0.7,
    });

    const response = completion.choices[0].message.content;

    return new Response(JSON.stringify({ response }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("OpenAI API error:", error);
    return new Response(JSON.stringify({ error: "Failed to get response from AI" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
