import React, { useState } from "react";
import "./PrimarySearch.css";
import { FiSearch } from "react-icons/fi";

const PrimarySearch = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="searchContainer">
      <FiSearch className="searchIcon" />
      <input
        name="primarySearch"
        value={search}
        onChange={(val: React.FormEvent<HTMLInputElement>) =>
          setSearch(val.currentTarget.value)
        }
        className="primarySearch"
        id="primarySearch"
        type="text"
      />
    </div>
  );
};

export default PrimarySearch;
