import Header from "../../components/Header/Header";
import PokemonPaginate from "../../components/PokemonPaginate/PokemonPaginate";
import SearchPanel from "../../components/SearchPanel/SearchPanel";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useDarkMode } from '../../../appState/appState';

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "2px",
  },
  main: {
    maxWidth: "1200px",
    minWidth: "300px",
  },
  body: {
    paddingTop: "8px",
  },
});

function Home() {
  const classes = useStyles();
  const { darkMode } = useDarkMode();

  return (
    <Grid
      container
      className={classes.main}
      spacing={1}
      style={{
        display: 'flex',
        padding: "8px",
        paddingTop: "8px",
        // width: "1200px",
        justifyContent: "space-around",
        alignItems: "space-between",
        margin: "0 auto",
        minHeight: "100vh",
        backgroundColor: darkMode? "#555555": 'lightgray',
      }}
    >
      <Grid item sm={12} xs={12} style={{ padding: 0, paddingBottom: "5px" }}>
        <Header />
        <Grid container className={classes.body} spacing={1}>
        <Grid item md={7} xs={12}>
          <PokemonPaginate />
        </Grid>
        <Grid item md={5} xs={12}>
          <SearchPanel />
        </Grid>
      </Grid>
      </Grid>
    
   
    </Grid>
  );
}

export default Home;
