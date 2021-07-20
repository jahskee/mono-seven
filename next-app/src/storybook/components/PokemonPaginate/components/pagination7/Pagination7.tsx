import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { usePageInfo } from '../../../../../appState/appState';
import { gql, useQuery } from "@apollo/client";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    marginTop: '0px'
  },
  pagination: {
    marginTop: '0px'
  }
}));

function graphQueryGetPokemonCount() {
  const { pageInfo } = usePageInfo();
  
  const GET_PAGED_POKEMONS = gql`
   query getPokemonCount {
      pokemonCount
    }
  `;
  return useQuery(GET_PAGED_POKEMONS);
}


export default function PaginationRounded() {
  const classes = useStyles();
  const { pageInfo, setPageInfo } = usePageInfo();
 

  function handleChange( event , selectedPage) {
    setPageInfo({...pageInfo, selectedPage});
  }

  return (
    <div className={classes.root}>
      <Pagination count={4} variant="outlined" shape="rounded" page={pageInfo.selectedPage} defaultPage={1} onChange={handleChange} style={{padding: '5px'}}/>
    </div>
  );
}