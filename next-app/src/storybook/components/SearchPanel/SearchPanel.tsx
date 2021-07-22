import React, { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import SearchResult from "./components/SearchResult/SearchResult";
import { makeStyles } from "@material-ui/styles";
import { Grid, Paper } from "@material-ui/core";
import DataMocks from "../../_data_mocks/data_mocks";
import { useSearchKey } from '../../../appState/appState';
import { useLazyQuery, gql } from "@apollo/client";

export const FIND_NAMES = gql`
  query FindNames($name: String!, $limit: Int!){
    findNames(name: $name, limit: $limit) {
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
  const [findNames, { data, loading }] = useLazyQuery(FIND_NAMES);
  const { searchKey } = useSearchKey();
 
  useEffect(()=>{
    const limit = 20;
    if(searchKey.trim() === "") {
      findNames({variables: {
        name: "   ",
        limit,
      }});
      return
    }
  
    if(searchKey.trim().length > 1) {
      findNames({variables: {
        name:searchKey,
        limit,
      }});
    }
  }, [searchKey])

  if(loading) return <div>Loading...</div>
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <SearchBox />
      </Grid>
      <Grid item xs={12} >
        {data && 
         <SearchResult pokemons={data.findNames} />
        }
        {!data && 
         <Paper style={{minHeight: '483px'}}>

         </Paper>
        }
      </Grid>
    </Grid>
  );
}

export default SearchPanel;
