import WelcomeCard from "@/components/welcome-card";

export default function Home() {
  return (
    <main className="min-h-screen w-full pt-[7vh] sm:px-[10vw] md:px-[15vw] ">
      <h1 className="text-center text-3xl font-bold">Chat with Shabel</h1>
      <section className="">
        <WelcomeCard />
      </section>
    </main>
  );
}
