import { makeVar, useReactiveVar } from '@apollo/client';

const setDarkMode = makeVar(true);
const useDarkMode = () => {
  const darkMode= useReactiveVar(setDarkMode);
  return { darkMode, setDarkMode };
};

export default useDarkMode;
