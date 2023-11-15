import openai from "@/app/utils/aiConfig";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

export async function POST(request) {
  const { messages } = await request.json();

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    temperature: 0.4,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 150,
    n: 1,
    messages: messages,

    stream: true,
  });

  //   for await (const chunk of response) {
  //     console.log(chunk.choices[0].delta.content);
  //   }

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
