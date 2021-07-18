import React from 'react';
import PokemonTable from './components/pokemon-table/PokemonTable';
import Pagination7 from './components/pagination7/Pagination7';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';

const useStyle = makeStyles({
  bottom: {
    display: 'flex',
    justifyContent: 'flex-end',
  }
});
function Table7() {
  const classes = useStyle();
  return(
    <div>
      <PokemonTable />
      <Box className={classes.bottom}>
        <Pagination7 />
      </Box>
     
    </div>
  )

}

export default Table7;