// components/SearchBar.tsx
import React from "react";

const Search: React.FC = () => {
  return (
    <input
      type="text"
      placeholder="How can we help you today?"
      className="w-3/5 p-3 border border-gray-300 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  );
};

export default Search;
