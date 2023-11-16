"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";
import { useChat } from "ai/react";
import { CornerDownLeft, Crown, Loader, User } from "lucide-react";
import React from "react";
import { nameInitials } from "@/lib/utils";

export default function ChatForm() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/chat",
    });

  const { isSignedIn, user } = useUser();
  console.log(messages);
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch ">
      <ul>
        {messages.map((m, index) => (
          <li key={index} className="my-3">
            {m.role === "user" ? (
              <>
                <div className="grid grid-cols-[3rem_1fr] gap-2">
                  {isSignedIn && user?.imageUrl ? (
                    <>
                      <Avatar className="w-5 h-5">
                        <AvatarImage src={user.imageUrl} />
                        <AvatarFallback>
                          {nameInitials(user.fullName)}
                        </AvatarFallback>
                      </Avatar>
                    </>
                  ) : (
                    <User className="w-5 h-5" />
                  )}
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
          disabled={isLoading}
          size="icon"
          className="flex-shrink-0 dark:bg-violet-600"
        >
          {isLoading ? (
            <Loader className="h-4 w-4 animate-spin " />
          ) : (
            <CornerDownLeft className="h-4 w-4" />
          )}
        </Button>
      </form>
    </div>
  );
}
