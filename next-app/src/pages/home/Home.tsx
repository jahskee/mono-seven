import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import { gql, useLazyQuery } from '@apollo/client';
import { Button } from '@material-ui/core';
import logo from '../../assets/images/7eleven.png';
import useStyles from './Home.styles';
import Pokemon from './Pokemon';

import useReactiveVars from '../../appState';

const getRecStart = (page, recordPerPage) => page * recordPerPage;

const getRecEnd = (recStart, total, recordPerPage) => {
  let recEnd = recStart + recordPerPage - 1;
  recEnd = recEnd < total ? recEnd : total;
  return recEnd;
};

const ALL_POKEMON_IDS = gql`
  query allPokemons {
    allPokemons {
      id
    }
  }
`;

function Home() {
  const classes = useStyles();

  const { usePage, usePokemonList, useRecordPerPage } = useReactiveVars();
  const { page, setPage } = usePage();
  const { pokemonList, setPokemonList } = usePokemonList();
  const { recordPerPage } = useRecordPerPage();

  const [getPokemonIds, { loading, error, data }] = useLazyQuery(
    ALL_POKEMON_IDS,
  );

  if (loading) return <div>Loading...</div>;
  if (error) return `Error! ${error}`;

  if (pokemonList.length === 0) {
    getPokemonIds();
    if (data) {
      let pageCt = 0;
      const pagedPokemonList = data.allPokemons.map((item, index) => {
        const modulo = index % recordPerPage;
        if (modulo === 0 && index !== 0) {
          pageCt += 1;
        }
        return { id: item.id, page: pageCt };
      });
      setPokemonList(pagedPokemonList);
    }
  }

  const totalRecs = pokemonList.length;
  const totalPages = parseInt(totalRecs / recordPerPage, 10);
  const recStart = getRecStart(page, recordPerPage);
  const recEnd = getRecEnd(recStart, totalRecs, recordPerPage);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <Box>
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

          <div>
            <h2>Paginate</h2>
            <p>
              <button type="button" onClick={handlePrevPage}>{'<'}</button>
              {' '}
              {recStart}
              -
              {recEnd}
              {' '}
              <button type="button" onClick={handleNextPage}>{'>'}</button>
              {' '}
              of
              {' '}
              {totalRecs}
            </p>
            {pokemonList
        && pokemonList
          .filter((item) => item.page === page)
          .map((item) => (
            <div key={item.id}>
              <Pokemon id={item.id} />
            </div>
          ))}
          </div>
        </main>

      </Container>
    </Box>
  );
}

export default Home;
