import React from "react";
import "./SearchBar.css";

const SearchBar = ({
  handleSearchSubmit,
  searchkey,
  setSearchKey,
  handleClearSearch,
}) => {
  return (
    <div className="searchBar-wrapper">
      <form onSubmit={handleSearchSubmit}>
        <input
          placeholder="Search By Category"
          value={searchkey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        {searchkey && <span onClick={handleClearSearch}>X</span>}
        <button>Go</button>
      </form>
    </div>
  );
};

export default SearchBar;
