import ChatForm from "../ChatForm";

export const runtime = "edge";

export default function page({ params }) {
  return <ChatForm />;
}
