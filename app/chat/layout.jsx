import Navbar from "@/components/main-nav";

export default function layout({ children }) {
  return (
    <main>
      <Navbar />
      <main className="px-6 w-full overflow-hidden flex justify-center">
        {children}
      </main>
    </main>
  );
}
