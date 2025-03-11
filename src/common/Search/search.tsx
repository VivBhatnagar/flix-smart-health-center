'use client'

import React, { JSX, useEffect } from "react";

interface SearchBarProps {
  handleSearch: (searchTerm: string) => void;
}

export default function Search({handleSearch}:SearchBarProps):JSX.Element {
  const [input, setInput] = React.useState('');

  
/**
 * Triggers the search function with the current input value.
 * Implements a debounce mechanism to limit the frequency of search calls.
 */

  const handleInputChange = () => {
    handleSearch(input);
  };

  useEffect(() => {
    const timer = setTimeout(handleInputChange,300);

    return () => {
      clearTimeout(timer);
    };
  },[input])

  return (
    <div className="relative w-full max-w-md flex items-center justify-center">
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Search FAQ's..."
      className="w-full p-3 pl-4 pr-10 border border-gray-300 bg-white rounded-full text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
    />

    {input && (
      <button
        onClick={() => setInput("")} aria-label="Clear Search"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition"
      >
        ✖
      </button>
    )}
  </div>
  );
};

