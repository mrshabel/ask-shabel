import ChatForm from "./ChatForm";

export const runtime = "edge";

export default async function page() {
  return <ChatForm />;
}
