"use client";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  AlertCircle,
} from "@/components/ui/alert";

export default function Error({ error, reset }) {
  return (
    <html>
      <body>
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            An error occured. Please try again.
          </AlertDescription>
        </Alert>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
