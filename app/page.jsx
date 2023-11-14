import { ChatForm } from "@/components/chat-form";
import WelcomeCard from "@/components/welcome-card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full pt-[7vh] sm:px-[10vw] md:px-[15vw] ">
      <section className="sm:px-[15vw] md:px-[20vw] lg:px-[25vw]">
        <section className="w-full">
          <WelcomeCard />
        </section>
        <section className="w-full mt-36 fixed sm:px-[15vw] md:px-[20vw] lg:px-[25vw] inset-x-0 bottom-0 left-0 py-3 ">
          <ChatForm />
        </section>
      </section>
    </main>
  );
}
