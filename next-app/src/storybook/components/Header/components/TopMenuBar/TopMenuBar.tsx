import { Box, Typography } from "@material-ui/core";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import IOSSwitch from "./IOSSwitch";
import useReactiveVars from "../../../../../appState";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-betwwen",
  },
  menuButton: {
    //display: "flex",
   // flexDirection: "column",
   
  },
  title: {
    fontSize: "1rem",
  },
  menuItem: {
    paddingLeft: '5px',
  }
}));

function AppBar7() {
  const classes = useStyles();
  const { useDarkMode } = useReactiveVars();
  const { darkMode, setDarkMode } = useDarkMode();

  function handleChange() {
    setDarkMode(!darkMode);
  }

  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
   
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
              <Typography className={classes.menuItem}>Menu</Typography>
            </IconButton>
      

        <IOSSwitch checked={darkMode} onChange={handleChange} />
      </Toolbar>
    </AppBar>
  );
}

export default AppBar7;
