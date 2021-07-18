import SearchBox from './components/SearchBox/SearchBox';
import SearchResult from './components/SearchResult/SearchResult';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({

  seachResult: {
    padding: '8px',
  }
});

function SearchPanel() {
  const classes = useStyles();
  return (
    <div>
      <SearchBox />
      
      <SearchResult/>
    </div>
  )
}

export default SearchPanel;