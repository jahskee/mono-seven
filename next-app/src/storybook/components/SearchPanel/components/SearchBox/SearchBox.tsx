import React, { useCallback, useRef } from "react";
import SearchBar from "material-ui-search-bar";
import { useSearchKey } from "../../../../../appState/appState";
import debounce from "lodash.debounce";

function SearchBox({handleSearchChange}) {
  const { searchKey, setSearchKey } = useSearchKey();

  const handleSearch = (searchKey) => {
    searchKey = searchKey.trim();
    setSearchKey(searchKey);
    handleSearchChange(searchKey)
  };

  const debouncedChangeHandler = useCallback(debounce(handleSearch, 300), []);
  const searchRef = useRef();

  return (
    <div>
      <SearchBar value={searchKey} 
        onChange={debouncedChangeHandler} 
        onCancelSearch={()=>{ handleSearch("   ") }}
        cancelOnEscape={true}
      />
    </div>
  );
}

export default SearchBox;
