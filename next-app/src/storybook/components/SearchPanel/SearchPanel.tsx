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
  {
    id: "61",
    name: "Poke1",
    weight: "120",
    accuracy: "88",
    power: "24",
    generation: "gen-x",
    xp: "4.0",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
  },
  {
    id: "61",
    name: "Poke2",
    weight: "160",
    accuracy: "75",
    power: "24",
    generation: "gen-x",
    xp: "4.0",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
  },
  {
    id: "61",
    name: "Poke3",
    weight: "202",
    accuracy: "95",
    power: "24",
    generation: "gen-x",
    xp: "4.0",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
  },
  {
    id: "61",
    name: "Poke4",
    weight: "180",
    accuracy: "78",
    power: "24",
    generation: "gen-x",
    xp: "4.0",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    id: "61",
    name: "Poke5",
    weight: "196",
    accuracy: "98",
    power: "24",
    generation: "gen-x",
    xp: "4.0",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
  },
  {
    id: "61",
    name: "Poke6",
    weight: "206",
    accuracy: "99",
    power: "24",
    generation: "gen-x",
    xp: "4.0",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
  },
  {
    id: "61",
    name: "Poke7",
    weight: "210",
    accuracy: "89",
    power: "24",
    generation: "gen-x",
    xp: "4.0",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    id: "61",
    name: "Poke8",
    weight: "201",
    accuracy: "85",
    power: "24",
    generation: "gen-x",
    xp: "4.0",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
  },
  {
    id: "61",
    name: "Poke9",
    weight: "198",
    accuracy: "94",
    power: "24",
    generation: "gen-x",
    xp: "4.0",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
  },
  {
    id: "61",
    name: "Poke10",
    weight: "189",
    accuracy: "96",
    power: "24",
    generation: "gen-x",
    xp: "4.0",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
  },
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