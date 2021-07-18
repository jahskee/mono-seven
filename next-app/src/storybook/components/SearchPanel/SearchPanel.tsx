import SearchBox from './components/SearchBox/SearchBox';
import SearchResult from './components/SearchResult/SearchResult';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({

  seachResult: {
    padding: '8px',
  }
});

function SearchPanel() {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <SearchBox />
      </Grid>
      <Grid item xs={12}>
        <SearchResult/>
      </Grid>
    </Grid>
  )
}

export default SearchPanel;