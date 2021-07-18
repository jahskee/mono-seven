import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { gql, useLazyQuery } from '@apollo/client';
import useStyles from './Home.styles';
import Pokemon from './Pokemon';

import AppBar7 from '../../storybook/components/Header/components/appbar/AppBar7';
import HeroImage from '../../storybook/components/Header/components/hero-image/HeroImage';
import Table7 from '../../storybook/components/PokemonPaginate/PokemonPaginate';

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
       <AppBar7 />
       <HeroImage />
       <Table7 />
        <main>
    
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
