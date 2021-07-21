import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { usePageInfo } from "../../../../../appState/appState";
import { useLazyQuery } from "@apollo/client";

import Queries from "../../../../_queries/apollo_client_queries";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
    marginTop: "0px",
  },
  pagination: {
    marginTop: "0px",
  },
}));

export default function PaginationRounded() {
  const classes = useStyles();
  const [getPokemonsCount, { data }] = useLazyQuery(
    Queries.GET_POKEMONS_COUNT
  );
  const { pageInfo, setPageInfo } = usePageInfo();

  useEffect(() => {
    getPokemonsCount();
    if (data) {
      const { pokemonsCount} = data.pokemonsCount;
      const pageCount = Math.ceil(pokemonsCount / pageInfo.limit);
      setPageInfo({ ...pageInfo, pageCount });
    }
  }, [data]);

  const handleChange = (event, selectedPage) => {
    event.preventDefault();
    setPageInfo({ ...pageInfo, selectedPage });
  };

  return (
    <div className={classes.root}>
      <Pagination
        count={pageInfo.pageCount}
        variant="outlined"
        shape="rounded"
        page={pageInfo.selectedPage}
        defaultPage={1}
        onChange={handleChange}
        style={{ padding: "5px" }}
      />
    </div>
  );
}
