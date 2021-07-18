import usePage from './states/page';
import usePokemonList from './states/pokemonList';
import useRecordPerPage from './states/recordPerPage';
import useDarkMode from './states/darkMode';

const reactiveVars = () => ({ usePage, useDarkMode, usePokemonList, useRecordPerPage });
export default reactiveVars;
