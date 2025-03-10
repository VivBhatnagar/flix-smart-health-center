'use client'
import { getAiResponse } from "@lib/utils";
import React, { useEffect, useRef, useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Hello! How can I assist you today?", sender: "bot" }]);
  const [input, setInput] = useState("");

  const sendMessage = async() => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    const data = await getAiResponse(input);
    setMessages(messages => [...messages,{text:data.candidates?.[0]?.content?.parts?.[0].text || "No response from AI.",sender: "bot"}]);
  };




  return (
    <div className="fixed bottom-2 right-2">
      {/* Chatbot Window */}
      <div
         className={`bg-white shadow-lg w-80 transition-transform duration-300 rounded-[25px]
          ${isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-0 opacity-0 translate-y-10"}`}
      >
        <div className="bg-green-600 text-white px-4 py-2 flex justify-between rounded-t-[25px] items-center">
          <span className="ml-20">Chat with us!</span>
          <button onClick={() => setIsOpen(false)} className="text-xl font-bold">×</button>
        </div>
        <div className="p-3 h-60 overflow-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-2 p-2 rounded ${msg.sender === "bot" ? "bg-gray-200 text-left mr-8" : "bg-green-100 text-right ml-8 self-end"}`}>
              {msg.text}
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
          <button onClick={sendMessage} className="bg-green-500 text-white px-3 rounded-r-[25px] ml-2">Send</button>
        </div>
      </div>

      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-full transition-transform duration-300 hover:scale-110 float-right"
        >
          💬
        </button>
      )}
    </div>
  );
};
