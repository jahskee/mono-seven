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

const rows = [
  { id: '61', name: 'Frozen yoghurt', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "hello" },
  { id: '61', name: 'Frozen yoghurt', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "hello" },
  { id: '61', name: 'Frozen yoghurt', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "hello" },
  { id: '61', name: 'Frozen yoghurt', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "hello" },
  { id: '61', name: 'Frozen yoghurt', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "hello" },
  { id: '61', name: 'Frozen yoghurt', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "hello" },
  { id: '61', name: 'Frozen yoghurt', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "hello" },
  { id: '61', name: 'Frozen yoghurt', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "hello" },
  { id: '61', name: 'Frozen yoghurt', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "hello" },
  { id: '61', name: 'Frozen yoghurt', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "hello" },
];

function Table7() {
  const classes = useStyle();
  return(
    <div>
      <PokemonTable rows={rows} />
      <Box className={classes.bottom}>
        <Pagination7 />
      </Box>
     
    </div>
  )

}

export default Table7;