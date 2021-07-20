import React from "react";
import PokemonTable from "./components/pokemon-table/PokemonTable";
import Pagination7 from "./components/pagination7/Pagination7";
import { makeStyles } from "@material-ui/styles";
import { Grid, Paper, Box } from "@material-ui/core";
import pokemons from '../../_data_mocks/pokemons';
import { gql, useLazyQuery } from '@apollo/client';

const pageControl = {
  display: "flex",
  justifyContent: "flex-end",
};

const useStyle = makeStyles((theme) => ({
  pageControlTop: {
    ...pageControl,
    paddingBottom: "8px",
  },
  pageControlBottom: {
    ...pageControl,
    marginTop: "8px",
  },
}));

const GET_PAGED_POKEMONS = gql`
query getPagedPokemons($offset: Int, $limit: Int) {
  pagedPokemons(offset:$offset, limit:$limit) {
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

function PokemonPaginate() {
  const classes = useStyle();
  const [getPagedPokemons, { called, loading, error, data }] = useLazyQuery(
    GET_PAGED_POKEMONS, { variables: {offset: 0, limit: 4}}
  );

  if (called && loading) return <div>Loading...</div>;
  if (error) return `Error! ${error}`;
  
  if (!called) {
    getPagedPokemons();
  }
  //*const data1 = getPagedPokemons();
  if (data) {
    //const pokemons = data.pagedPokemons;
    return (
      <Grid container>
        <Grid item xs={12}>
          <PokemonTable pokemons={data.pagedPokemons} />
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.pageControlBottom} component={Paper}>
            <Pagination7 />
          </Box>
        </Grid>
      </Grid>
    );
  }
  return <div>Loading...</div>
}

export default PokemonPaginate;
