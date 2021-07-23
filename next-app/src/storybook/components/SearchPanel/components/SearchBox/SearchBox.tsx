import React, { useCallback, useRef } from "react";
import SearchBar from "material-ui-search-bar";
import { useSearchKey } from "../../../../../appState/appState";
import debounce from "lodash.debounce";

function SearchBox() {
  const { searchKey, setSearchKey } = useSearchKey();

  const handleSearch = (searchKey) => {
    searchKey = searchKey.trim();
    setSearchKey(searchKey);
  };

  const debouncedChangeHandler = useCallback(debounce(handleSearch, 300), []);
  return (
    <div>
      <SearchBar
        value={searchKey}
        onChange={debouncedChangeHandler}
        onCancelSearch={() => {
          handleSearch("   ");
        }}
        cancelOnEscape={true}
      />
    </div>
  );
}

export default SearchBox;
