import { makeVar, useReactiveVar } from "@apollo/client";

const setDarkMode = makeVar(true);
export const useDarkMode = () => {
  const darkMode = useReactiveVar(setDarkMode);
  return { darkMode, setDarkMode };
};

const setPageInfo = makeVar({ selectedPage: 1, limit: 10, pageCount: 34 });
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

interface UseAppConfig {
  appConfig: {
    isMocked: boolean
  }
  setAppConfig: Function;
}

const setAppConfig = makeVar({isMocked: true});
export const useAppConfig = (): UseAppConfig => {
  const appConfig = useReactiveVar(setAppConfig);
  return { appConfig, setAppConfig };
};