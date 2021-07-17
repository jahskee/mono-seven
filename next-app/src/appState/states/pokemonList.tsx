import { makeVar, useReactiveVar } from '@apollo/client';

const setPokemonList = makeVar([]);
const usePokemonList = () => {
  const pokemonList = useReactiveVar(setPokemonList);
  return { pokemonList, setPokemonList };
};

export default usePokemonList;
