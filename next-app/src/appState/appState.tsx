import { makeVar, useReactiveVar } from "@apollo/client";

const setDarkMode = makeVar(true);
export const useDarkMode = () => {
  const darkMode = useReactiveVar(setDarkMode);
  return { darkMode, setDarkMode };
};

interface PageInfo {
  selectedPage?: number;
  limit?: number;
  pageCount?: number;
}
interface UsePageInfo {
  pageInfo: PageInfo;
  setPageInfo: (pageInfo: PageInfo) => void;
}

const setPageInfo = makeVar({ selectedPage: 1, limit: 10, pageCount: 34 });
export const usePageInfo = (): UsePageInfo => {
  const pageInfo = useReactiveVar(setPageInfo);
  return { pageInfo, setPageInfo };
};

interface UseSearchKey {
  searchKey: string;
  setSearchKey: (param: string)=>void
}

const setSearchKey = makeVar("");
export const useSearchKey = (): UseSearchKey => {
  const searchKey = useReactiveVar(setSearchKey);
  return { searchKey, setSearchKey };
};

interface UseAppConfig {
  appConfig: {
    isMocked: boolean;
  };
  setAppConfig: Function;
}

const setAppConfig = makeVar({ isMocked: true });
export const useAppConfig = (): UseAppConfig => {
  const appConfig = useReactiveVar(setAppConfig);
  return { appConfig, setAppConfig };
};
