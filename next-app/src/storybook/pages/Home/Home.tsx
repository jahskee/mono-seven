import Header from "../../components/Header/Header";
import PokemonPaginate from "../../components/PokemonPaginate/PokemonPaginate";
import SearchPanel from "../../components/SearchPanel/SearchPanel";

import Grid from "@material-ui/core/Grid";
import { makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '2px',
  },
  main: {
    maxWidth: '1200px',
    minWidth: '300px'
  },
  body: {
    paddingTop: '4px',
  }
})

function Home() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container className={classes.main} spacing={1}  >
          <Grid item sm={12} xs={12}>
            <Header />
          </Grid>
          <Grid container  className={classes.body} spacing={1}>
            <Grid item md={5} xs={12}>
              <SearchPanel />
            </Grid>
            <Grid item md={7} xs={12}>
              <PokemonPaginate />
            </Grid>
          </Grid>
        </Grid>
    </div>
  
  );
}

export default Home;
