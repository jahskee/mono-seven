import { makeVar, useReactiveVar } from '@apollo/client';

const setPage = makeVar(0);
const usePage = () => {
  const page = useReactiveVar(setPage);
  return { page, setPage };
};
export default usePage;
