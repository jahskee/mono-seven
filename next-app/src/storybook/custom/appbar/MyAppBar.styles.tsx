import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: 'spread-between',
  },
  toolbarTitle: {
    flex: 1,
  }
}));

export default useStyles;
