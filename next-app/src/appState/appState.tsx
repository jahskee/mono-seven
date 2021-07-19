import { makeVar, useReactiveVar } from '@apollo/client';

const setDarkMode = makeVar(true);
export const useDarkMode = () => {
  const darkMode= useReactiveVar(setDarkMode);
  return { darkMode, setDarkMode };
};

const setPage = makeVar(0);
export const usePage = () => {
  const page = useReactiveVar(setPage);
  return { page, setPage };
};

const setPokemonList = makeVar([]);
export const usePokemonList = () => {
  const pokemonList = useReactiveVar(setPokemonList);
  return { pokemonList, setPokemonList };
};

const setRecordPerPage = makeVar(10);
export const useRecordPerPage = () => {
  const recordPerPage = useReactiveVar(setRecordPerPage);
  return { recordPerPage, setRecordPerPage };
};
