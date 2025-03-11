"use client";
import { getAiResponse } from "@lib/utils";
import React, { useEffect, useRef, useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  // Scroll to latest message
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");
    setMessages((prev) => [...prev, { text: "...", sender: "bot" }]);
    const data = await getAiResponse(input);
    setMessages((prev) =>
      prev.map((msg, index) =>
        index === prev.length - 1
          ? {
              text:
                data.candidates?.[0]?.content?.parts?.[0].text ||
                "No response from AI.",
              sender: "bot",
            }
          : msg
      )
    );
  };

  return (
    <div className="fixed bottom-2 right-2">
      {isOpen && (
        <div className="bg-white shadow-lg w-80 transition-transform duration-300 rounded-[25px]">
          <div className="bg-primary text-white px-4 py-2 flex justify-between rounded-t-[25px] items-center">
            <span className="ml-20" aria-label="Chat with us">
              Chat with us!
            </span>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Chatbot"
              className="text-xl font-bold cursor-pointer"
            >
              x
            </button>
          </div>

          <div className="p-3 h-60 overflow-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                ref={index === messages.length - 1 ? lastMessageRef : null}
                aria-label={`Message from ${msg.sender}: ${msg.text}`}
                className={`mb-2 p-2 rounded ${
                  msg.sender === "bot"
                    ? "bg-gray-200 text-left mr-8"
                    : "bg-green-100 text-right ml-8 self-end"
                }`}
              >
                {msg.text === "..." ? (
                  <span className="inline-block animate-pulse">...</span>
                ) : (
                  msg.text
                )}

                {msg.sender === "bot" && index !== 0 && msg.text !== "..." && (
                  <div className="flex gap-2 mt-1 text-gray-500 text-sm">
                    <button aria-label="Like" className="hover:text-green-500">
                      👍
                    </button>
                    <button aria-label="Dislike" className="hover:text-red-500">
                      👎
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="border-gray-200 border-t flex">
            <input
              type="text"
              value={input}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow py-2 pl-4 rounded focus:outline-none"
            />
            <button
              onClick={sendMessage}
              aria-label="Send"
              className="bg-primary text-white px-3 rounded-r-[25px] ml-2"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Start Chatbot"
          className="bg-primary text-white px-4 py-2 rounded-full transition-transform duration-300 hover:scale-110 float-right"
        >
          💬
        </button>
      )}
    </div>
  );
};
