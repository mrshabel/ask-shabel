import Navbar from "@/components/main-nav";
import Nav from "@/components/nav";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <section className="pt-[8vh] w-full mt-5 sm:mt-12 flex flex-col items-center px-3">
        <div className="w-full max-w-lg flex flex-col items-center text-center gap-3">
          <h1 className="text-4xl font-semibold">
            Experience the chatbot revolution. Get started today!
          </h1>
          <p>The future is exiting. Ready?</p>

          <Button asChild variant="default" className="w-fit self-center mt-3">
            <Link href="/chat">Get Started</Link>
          </Button>
        </div>
        <Image
          src={"/hero.png"}
          alt="hero"
          className="mt-6 rounded-md"
          width={600}
          height={600}
          quality={100}
          sizes="100%"
        />
      </section>
    </>
  );
}
