import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

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

  return (
    <div className={classes.root}>
      <Pagination count={20} variant="outlined" shape="rounded" />
    </div>
  );
}