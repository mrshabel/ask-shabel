"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CornerDownLeft } from "lucide-react";

// const formSchema = z.object({
//   message: z.string().min(3, {
//     message: "Message must be at least 3 characters.",
//   }),
// });

export function ChatForm() {
  const form = useForm({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-x-2 w-full flex items-center"
      >
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="flex-grow">
              {/* <FormLabel>Message</FormLabel> */}
              <FormControl>
                <Input
                  placeholder="Send a message..."
                  className="w-full"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="outline"
          size="icon"
          className="flex-shrink-0"
        >
          <CornerDownLeft className="h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
}
