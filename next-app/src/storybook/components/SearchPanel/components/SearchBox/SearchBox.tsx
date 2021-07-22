import React, { useCallback } from "react";
import SearchBar from "material-ui-search-bar";
import { useSearchKey } from "../../../../../appState/appState";
import debounce from "lodash.debounce";

function SearchBox({handleSearchChange}) {
  const { searchKey, setSearchKey } = useSearchKey();

  const handleSearch = (searchKey) => {
    setSearchKey(searchKey);
    handleSearchChange(searchKey)
  };

  const debouncedChangeHandler = useCallback(debounce(handleSearch, 300), []);

  return (
    <div>
      <SearchBar value={searchKey} onChange={debouncedChangeHandler} />
    </div>
  );
}

export default SearchBox;
