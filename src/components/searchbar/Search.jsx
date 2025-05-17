
import React from "react";
import { useSearch } from "../../context/SearchContext";

const Search = ({ placeholder = "Search..." }) => {
  const { searchQuery, setSearchQuery } = useSearch();

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={handleChange}
      placeholder={placeholder}
      className="w-full p-2 pl-5 pr-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default Search;
