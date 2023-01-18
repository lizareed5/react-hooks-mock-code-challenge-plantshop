import React from "react";

function Search({searchText, handleSearchInput}) {


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchText}
        onChange={handleSearchInput}
        // onChange={(e) => console.log("Searching...")}
      />
    </div>
  );
}

export default Search;
