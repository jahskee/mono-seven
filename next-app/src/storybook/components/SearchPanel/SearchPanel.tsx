import SearchBox from './components/SearchBox/SearchBox';
import SearchResult from './components/SearchResult/SearchResult';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({

  divider: {
    padding: '0.5rem',
  }
});

function SearchPanel() {
  const classes = useStyles();
  return (
    <div>
      <SearchBox />
      <div className={classes.divider}/>
      <SearchResult />
    </div>
  )
}

export default SearchPanel;