import React from 'react';
import SearchBar from "material-ui-search-bar";

function SearchBox(){
  return (
    <div>
      <SearchBar
    value="test"
    onChange={(newValue) => {}}
    onRequestSearch={() => { }}
  />
    </div>
  )
}

export default SearchBox;