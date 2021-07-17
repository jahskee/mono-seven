import { makeVar, useReactiveVar } from '@apollo/client';

const setRecordPerPage = makeVar(10);
const useRecordPerPage = () => {
  const recordPerPage = useReactiveVar(setRecordPerPage);
  return { recordPerPage, setRecordPerPage };
};
export default useRecordPerPage;
