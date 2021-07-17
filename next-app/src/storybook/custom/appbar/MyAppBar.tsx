
import { Box, Typography } from '@material-ui/core';
import { AppBar, Toolbar, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: 'spread-between',
  },
  toolbarTitle: {
    flex: 1,
  },
  menuButton: {

  },
  title: {
    fontSize: '1rem'
  }
}));

function MyAppBar() {
  const classes = useStyles();
  return (
    <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" className={classes.title}>
              Home
            </Typography>
          </Toolbar>
        </AppBar>
  )
}

export default MyAppBar;