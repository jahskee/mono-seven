import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      margin: 0,
      backgroundColor: theme.palette.primary,
    },
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: 'spread-between',
  },
  toolbarTitle: {
    flex: 1,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

  },
  mainFeaturedPostContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2),
      paddingRight: 0,
      paddingBottom: theme.spacing(10),
    },
  },
  logo: {
    height: '100px',
    width: '85px',
    [theme.breakpoints.down('sm')]: {
      height: '70px',
      width: '55px',
      padding: '0px',
    },
  },
}));

export default useStyles;
