import Link from "next/link";
import Sidebar from "./sidebar";
import ThemeToggle from "./theme-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="fixed top-0 py-1 w-screen z-[50] nav-container h-[7vh]">
      <div className="flex items-center justify-between px-3 py-2 w-full">
        <Sidebar />

        <div className="px-3 flex items-center gap-2 ">
          <UserButton afterSignOutUrl="/home" />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
