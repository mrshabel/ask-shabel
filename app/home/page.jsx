import Navbar from "@/components/main-nav";
import WelcomeCard from "@/components/welcome-card";

export default function Home() {
  return (
    <main className="h-screen w-full pt-[7vh] ">
      <Navbar />

      <h1 className="text-center text-3xl font-bold">Chat with Shabel</h1>
      <section className="my-8 sm:my-12 flex justify-center">
        <WelcomeCard />
      </section>
    </main>
  );
}
