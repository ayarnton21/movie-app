import React, { useState } from "react";
import searchMovies from "../../services/searchMovies";

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <form method="get" action="/search">
      <input
        name="search"
        className="text-black"
        value={searchValue}
        placeholder="Search"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit" disabled={!searchValue}>
        Search
      </button>
    </form>
  );
};

export default Search;
