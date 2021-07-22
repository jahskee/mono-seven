import React, { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import SearchResult from "./components/SearchResult/SearchResult";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import DataMocks from "../../_data_mocks/data_mocks";
import { useSearchKey } from '../../../appState/appState';
import { useLazyQuery, gql } from "@apollo/client";

const useStyles = makeStyles({
  seachResult: {
    padding: "8px",
  },
});

export const FIND_NAMES = gql`
  query findNames($name: String!){
    findNames(name: $name, limit:10) {
      id
      name
      weight
      accuracy
      power
      generation
      xp
      image
    }
  }
`;

function SearchPanel() {
  const { searchKey, setSearchKey} = useSearchKey();
  const [findNames, { data, loading }] = useLazyQuery(FIND_NAMES);
  const classes = useStyles();
  const [pokemons, setPokemons] = useState([]);

  const handleSearchChange = (searchKey, limit = 10)=> {
    console.log("searchkey", searchKey, "limit", 10)

    findNames({variables: {
      name: searchKey,
      limit,
    }});
  }

  if(loading) return <div>Loading...</div>
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <SearchBox handleSearchChange={handleSearchChange}/>
      </Grid>
      <Grid item xs={12} >
        <SearchResult pokemons={data.findNames} />
      </Grid>
    </Grid>
  );
}

export default SearchPanel;
