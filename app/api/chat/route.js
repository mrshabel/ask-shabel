import openai from "@/app/utils/aiConfig";
// import { db } from "@/prisma";
// import { auth } from "@clerk/nextjs";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

export async function POST(request) {
  const { messages } = await request.json();
  // const { userId } = auth();

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

  // for await (const chunk of response) {
  //   console.log(chunk.choices[0].delta.content);
  // }

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}

//  {
//     async onCompletion(completion) {
//       let user;
//       user = await db.users.findFirst({
//         where: {
//           userId,
//         },
//       });
//       if (!user) {
//         user = await db.users.create({
//           data: {
//             userId: userId,
//           },
//         });
//       }
//       const conversation = await db.conversations.create({
//         data: {
//           name: messages.at(-1).content.substring(0, 100),
//           userId: user?.id,
//         },
//       });
//       await db.messages.create({
//         data: {
//           prompt: messages.at(-1).content,
//           response: conversationHistory,
//           conversationId: conversation?.id,
//         },
//       });
//     },
//   }
