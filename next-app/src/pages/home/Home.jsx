import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import logo from '../../assets/images/7eleven.png';
import useStyles from './Home.styles';

function Home() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.container}>
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
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            <img
              style={{ display: 'none' }}
              src="https://source.unsplash.com/user/erondu"
              alt="background"
            />
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <img src={logo} className={classes.logo} alt="7eleveln logo" />
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
        </main>
      </Container>
    </>
  );
}

export default Home;
