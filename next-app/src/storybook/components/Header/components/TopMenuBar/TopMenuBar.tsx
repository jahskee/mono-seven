import { Box, Typography } from "@material-ui/core";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuButton: {},
  title: {
    fontSize: "1rem",
  },
}));

function AppBar7() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography>Home</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default AppBar7;
