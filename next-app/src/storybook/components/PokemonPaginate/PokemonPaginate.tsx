import React from "react";
import PokemonTable from "./components/pokemon-table/PokemonTable";
import Pagination7 from "./components/pagination7/Pagination7";
import { makeStyles } from "@material-ui/styles";
import { Grid, Paper, Box } from "@material-ui/core";
import { useLazyQuery } from "@apollo/client";
import { usePageInfo } from "../../../appState/appState";
import Queries from '../../_queries/apollo_client_queries';

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

function graphQueryGetPokemons() {
  const { pageInfo } = usePageInfo();
  const recStart = (pageInfo.selectedPage - 1) * pageInfo.limit;
  const [
    getPagedPokemons,
    { called, loading, error, data },
  ] = useLazyQuery(Queries.GET_PAGED_POKEMONS, {
    variables: { offset: recStart, limit: pageInfo.limit },
  });

  return { getPagedPokemons, called, loading, error, data };
}

function PokemonPaginate() {
  const classes = useStyle();
  const query1 = graphQueryGetPokemons();

  if (query1.called && query1.loading) return <div>Loading...</div>;
  if (query1.error) return <div>`Error! ${query1.error}`</div>;

  if (!query1.called) {
    query1.getPagedPokemons();
  }

  if (query1.data) {
    return (
      <Grid container>
        <Grid item xs={12}>
          <PokemonTable pokemons={query1.data.pagedPokemons} />
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.pageControlBottom} component={Paper}>
            <Pagination7 />
          </Box>
        </Grid>
      </Grid>
    );
  }
  return <div>Loading...</div>;
}

export default PokemonPaginate;
