import { makeVar, useReactiveVar } from "@apollo/client";

const setDarkMode = makeVar(true);
export const useDarkMode = () => {
  const darkMode = useReactiveVar(setDarkMode);
  return { darkMode, setDarkMode };
};



const setPageInfo = makeVar({ selectedPage: 0, pageCount: 0 });
export const usePageInfo = function() {
  const pageInfo = useReactiveVar(setPageInfo);
  return { pageInfo, setPageInfo };
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
