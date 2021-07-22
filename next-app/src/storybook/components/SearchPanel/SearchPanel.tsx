import React, { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import SearchResult from "./components/SearchResult/SearchResult";
import { Grid, Paper } from "@material-ui/core";

function SearchPanel() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <SearchBox />
      </Grid>
      <Grid item xs={12}>
        <SearchResult />
      </Grid>
    </Grid>
  );
}

export default SearchPanel;
