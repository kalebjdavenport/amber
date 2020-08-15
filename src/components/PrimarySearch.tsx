import React, { useState, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import tw from "twin.macro";

// Styling for the SearchBar div
const SearchBar = tw.div`
  rounded
  bg-gray-200
  outline-none
  p-4
  flex
  flex-row
  w-full
  border-solid
  border-2
  border-gray-200
  focus-within:(border-blue-400)
  cursor-text
  box-border
`;

/**
 * The search bar to be used as a primary means of searching through articles.
 */
const PrimarySearch = () => {
  const [search, setSearch] = useState("");
  const inputRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  return (
    <SearchBar
      onClick={() => { inputRef.current?.focus() }}>
      <FiSearch className="searchIcon" />
      <input
        ref={inputRef}
        name="primarySearch"
        onChange={(val: React.FormEvent<HTMLInputElement>) => {
          setSearch(val.currentTarget.value);
        }}
        style={tw`
          border-none
          bg-transparent
          w-full
          outline-none
          mx-2
          text-base
        `}
        placeholder="Search article by title or content"
      />
    </SearchBar>
  );
};

export default PrimarySearch;
