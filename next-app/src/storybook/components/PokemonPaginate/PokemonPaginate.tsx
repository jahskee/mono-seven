import React from "react";
import PokemonTable from "./components/pokemon-table/PokemonTable";
import Pagination7 from "./components/pagination7/Pagination7";
import { makeStyles } from "@material-ui/styles";
import { Grid, Paper, Box } from "@material-ui/core";
import pokemons from '../../../_data/pokemon_data';

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


function Table7() {
  const classes = useStyle();
  return (
    <Grid container>
      <Grid item xs={12}>
        <PokemonTable pokemons={pokemons} />
      </Grid>
      <Grid item xs={12}>
        <Box className={classes.pageControlBottom} component={Paper}>
          <Pagination7 />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Table7;
