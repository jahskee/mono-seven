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
  }
})

function Home() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={0} className={classes.main}  >
          <Grid item sm={12} xs={12}>
            <Header />
          </Grid>
          <Grid container spacing={5}>
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
