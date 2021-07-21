import React, { useCallback } from "react";
import SearchBar from "material-ui-search-bar";
import { useSearchKey } from "../../../../../appState/appState";
import debounce from "lodash.debounce";

function SearchBox() {
  const { searchKey, setSearchKey } = useSearchKey();

  const handleSearch = (value) => {
    setSearchKey(value);
    console.log(value);
  };

  const debouncedChangeHandler = useCallback(debounce(handleSearch, 300), []);

  return (
    <div>
      <SearchBar
        value={searchKey}
        onChange={debouncedChangeHandler}
        onRequestSearch={() => handleSearch(searchKey)}
      />
    </div>
  );
}

export default SearchBox;
