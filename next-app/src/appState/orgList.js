import { makeVar, useReactiveVar } from '@apollo/client';

const setOrgList = makeVar([]);
const useOrgList = () => {
  const orgList = useReactiveVar(setOrgList);
  return { orgList, setOrgList };
};

export default useOrgList;
