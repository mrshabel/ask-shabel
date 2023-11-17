import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center nav-container fixed top-0 h-[8vh] w-screen px-3">
      <h2 className="font-semibold italic text-lg ">
        Ask <span className="text-violet-500">Shabel</span>
      </h2>
      <div className="flex items-center gap-2 mr-1">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <Button variant="default" className=" rounded-full ">
              Login
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button
              variant="outline"
              className="border-2 border-violet-500 rounded-full"
            >
              Register
            </Button>
          </SignUpButton>
        </SignedOut>
        <ThemeToggle />
      </div>
    </nav>
  );
}
