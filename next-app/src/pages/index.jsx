import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Image from 'next/image';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import logo from '../assets/images/7eleven.png';

const useStyles = makeStyles((theme) => ({
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
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2),
      paddingRight: 0,
      paddingBottom: theme.spacing(10),
    },
  },
  logo: {
    display: 'absolute',
    top: -210,
  },
}));

function Blog() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
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
                  <Image src={logo} height="100%" width="85%" alt="Picture of the author" />
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

export default Blog;
