"use client";
import Image from "next/image";
import React, { memo, RefObject } from "react";
import { MessageType } from "@/types";
import MyMessage from "./myMessage";
import MyPhotoMessage from "./myPhotoMessage";

const ChatBody = memo(
  ({
    messages,
    messagesEndRef,
    sender,
    receiver,
    setMessages,
  }: {
    messages: MessageType[];
    messagesEndRef: RefObject<HTMLDivElement>;
    sender: string;
    receiver: string;
    setMessages: React.Dispatch<React.SetStateAction<MessageType[]>>;
  }) => {
    return (
      <div
        className="chat-body w-full h-full px-8 pt-8 object-cover overflow-y-scroll flex flex-col gap-8"
        style={{ backgroundImage: 'url("/images/bg-chat.png")' }}
      >
        {messages?.map((item) =>
          item.sender === sender ? (
            <div
              key={item._id}
              className="my-message self-end text-right drop-shadow-2xl rounded-lg"
            >
              {item.message.slice(0, 16) === "https://maghaleh" ? (
                <MyPhotoMessage
                  receiver={receiver}
                  setMessages={setMessages}
                  message={item.message}
                  messageId={item._id}
                  sender={sender}
                />
              ) : (
                <MyMessage
                  receiver={receiver}
                  setMessages={setMessages}
                  message={item.message}
                  messageId={item._id}
                  sender={sender}
                />
              )}
            </div>
          ) : (
            <div
              key={item._id}
              className="you-message self-start text-left drop-shadow-2xl rounded-lg"
            >
              {item.message.slice(0, 16) === "https://maghaleh" ? (
                <Image
                  src={item.message}
                  width={200}
                  height={400}
                  alt="message picture"
                />
              ) : (
                <div className="bg-gradient-to-r inline-block w-auto max-w-[20rem] p-4 from-[#ffdb49] to-[#f59e0b] rounded-lg shadow-lg text-2xl font-bold text-first/90 break-words">
                  {item.message}
                </div>
              )}
            </div>
          )
        )}
        <div ref={messagesEndRef} />
      </div>
    );
  }
);

export default ChatBody;
