import SearchBox from './components/SearchBox/SearchBox';
import SearchResult from './components/SearchResult/SearchResult';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  seachResult: {
    padding: '8px',
  }
});

const rows = [
  { id: '61', name: 'Poke1', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png" },
  { id: '61', name: 'Poke2', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png" },
  { id: '61', name: 'Poke3', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png" },
  { id: '61', name: 'Poke4', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" },
  { id: '61', name: 'Poke5', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png" },
  { id: '61', name: 'Poke6', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" },
  { id: '61', name: 'Poke7', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" },
  { id: '61', name: 'Poke8', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png" },
  { id: '61', name: 'Poke9', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png" },
  { id: '61', name: 'Poke10', height: '159', weight:'6.0', order: '24', xp: '4.0', image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png" },
];


function SearchPanel() {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <SearchBox />
      </Grid>
      <Grid item xs={12}>
        <SearchResult rows={rows}/>
      </Grid>
    </Grid>
  )
}

export default SearchPanel;