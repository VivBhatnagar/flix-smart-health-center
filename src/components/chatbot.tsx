'use client'
import React, { useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Hello! How can I assist you today?", sender: "bot" }]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-2 right-2">
      {/* Chatbot Window */}
      <div
        className={`bg-white shadow-lg w-80 rounded-lg transition-transform duration-300 
          ${isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-0 opacity-0 translate-y-10"}`}
      >
        <div className="bg-green-600 text-white px-4 py-2 flex justify-between">
          <span>Chat with us!</span>
          <button onClick={() => setIsOpen(false)} className="text-xl font-bold">×</button>
        </div>
        <div className="p-3 h-60 overflow-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-2 p-2 rounded ${msg.sender === "bot" ? "bg-gray-200 float-left" : "bg-green-100 self-end"}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="p-2 border-t flex">
          <input
            type="text"
            value={input}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow p-2 border rounded"
          />
          <button onClick={sendMessage} className="bg-green-500 text-white px-3 rounded ml-2">Send</button>
        </div>
      </div>

      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-full transition-transform duration-300 hover:scale-110"
        >
          💬
        </button>
      )}
    </div>
  );
};
