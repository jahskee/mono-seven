import React, { useEffect } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import SearchResult from "./components/SearchResult/SearchResult";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import DataMocked from "../../_data_mocks/data_mocks";
import { useSearchKey } from '../../../appState/appState';
import { useLazyQuery } from "@apollo/client";
import Queries from "../../_queries/apollo_client_queries";

const useStyles = makeStyles({
  seachResult: {
    padding: "8px",
  },
});

function SearchPanel() {
  const { searchKey, setSearchKey} = useSearchKey();
  const [getNames, { data, loading }] = useLazyQuery(Queries.FIND_NAMES);
  const classes = useStyles();

  useEffect(()=>{
    if (searchKey.length > 2) {
      getNames();
    }
  }, [searchKey]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <SearchBox />
      </Grid>
      <Grid item xs={12} >
        <SearchResult pokemons={DataMocked.pokemons.slice(0,5)} />
      </Grid>
    </Grid>
  );
}

export default SearchPanel;
