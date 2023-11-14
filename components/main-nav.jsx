import Link from "next/link";
import Sidebar from "./sidebar";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="fixed w-screen z-[50] nav-container h-[7vh]">
      <div className="flex items-center justify-between px-3 py-2 w-full">
        <Sidebar />

        <div className="px-3">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
