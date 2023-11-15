import Navbar from "@/components/main-nav";

export default function layout({ children }) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
