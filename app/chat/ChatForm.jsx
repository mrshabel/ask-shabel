"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";
import { CornerDownLeft, Crown, User } from "lucide-react";
import React from "react";

export default function ChatForm() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  console.log(messages);

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch ">
      <ul>
        {messages.map((m, index) => (
          <li key={index} className="my-1">
            {m.role === "user" ? (
              <>
                <div className="grid grid-cols-[2.5rem_1fr] gap-2">
                  <User className="w-5 h-5" />
                  <div className="col-span-1">
                    <p>{m.content}</p>
                  </div>
                </div>

                <div
                  data-orientation="horizontal"
                  role="none"
                  class="shrink-0 bg-border h-[1px] w-full my-4 md:my-8"
                ></div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-[2.5rem_1fr] gap-2">
                  <Crown className="w-5 h-5" />
                  <div className="col-span-1">
                    <p className=" text-gray-600 dark:text-gray-400">
                      {m.content}
                    </p>
                  </div>
                </div>

                <div
                  data-orientation="horizontal"
                  role="none"
                  class="shrink-0 bg-border h-[1px] w-full my-4 md:my-8"
                ></div>
              </>
            )}
          </li>
        ))}
      </ul>

      <form
        onSubmit={handleSubmit}
        className="space-x-2 m-5 w-full flex items-center fixed bottom-0"
      >
        <Input
          className=" w-full max-w-md"
          placeholder="Start a new conversation..."
          value={input}
          onChange={handleInputChange}
          autoFocus
        />
        <Button
          type="submit"
          variant="outline"
          size="icon"
          className="flex-shrink-0 dark:bg-violet-600"
        >
          <CornerDownLeft className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
