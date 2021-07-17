
import { Box, Typography } from '@material-ui/core';
import './MyAppBar.styles.tsx';
import { AppBar, Toolbar, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './MyAppBar.styles';

function MyAppBar() {
  const classe = useStyles();
  return (
    <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Home
            </Typography>
          </Toolbar>
        </AppBar>
  )
}

export default MyAppBar;