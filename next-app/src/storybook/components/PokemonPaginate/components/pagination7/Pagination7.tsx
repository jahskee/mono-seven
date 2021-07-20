import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { usePageInfo } from '../../../../../appState/appState';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    marginTop: '0px'
  },
  pagination: {
    marginTop: '0px'
  }
}));

export default function PaginationRounded() {
  const classes = useStyles();
  const { pageInfo, setPageInfo } = usePageInfo();
  
  function handleChange( _ , selectedPage) {
    setPageInfo({...pageInfo, selectedPage});
    console.log(selectedPage, pageInfo);
    console.log('test')
  }

  return (
    <div className={classes.root}>
      <Pagination count={3} variant="outlined" shape="rounded" defaultPage={6} onChange={handleChange} />
    </div>
  );
}