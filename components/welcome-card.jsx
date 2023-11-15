import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function WelcomeCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to Ask Shabel Chatbot</CardTitle>
        <CardDescription>
          Get quick responses to your queries and assignments
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <MoveRight />
          <Link href="/" className="hover:underline-offset-2">
            Object Oriented Programming
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
