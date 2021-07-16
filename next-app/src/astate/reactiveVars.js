import { makeVar, useReactiveVar } from '@apollo/client';

const setPage = makeVar(0);
const page = useReactiveVar(setPage);
const usePage = () => ({ page, setPage });

const setOrgList = makeVar([]);
const orgList = useReactiveVar(setOrgList);
const useOrgList = () => ({ orgList, setOrgList });

const setRecordPerPage = makeVar(10);
const recordPerPage = useReactiveVar(setRecordPerPage);
const useRecordPerPage = () => ({ recordPerPage, setRecordPerPage });

const reactiveVars = () => ({ usePage, useOrgList, useRecordPerPage });
export default reactiveVars;
