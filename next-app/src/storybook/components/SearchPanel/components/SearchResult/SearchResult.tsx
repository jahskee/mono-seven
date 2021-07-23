import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import PokeDetail from "../../../PokeDetail/PokeDetail";
import ImageCell from "../../../ImageCell/ImageCell";
import Queries from '../../../../_queries/apollo_client_queries';
import { useSearchKey } from "../../../../../appState/appState";
import { useLazyQuery } from "@apollo/client";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  secondColumn: {
    width: "3rem",
    padding: "0",
    paddingLeft: 0,
  },
  tableCell: {
    padding: "1px",
    paddingRight: "1rem",
  },
  firstColumn: {
    width: "2.5rem",
  },
});

function Row({ pokemon }) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow key={1} className={classes.root}>
        <TableCell
          padding="none"
          className={`${classes.firstColumn} ${classes.tableCell}`}
        >
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell
          className={classes.secondColumn}
          style={{ padding: 0, width: 35 }}
        >
          <ImageCell pokemon={pokemon} />
        </TableCell>
        <TableCell
          component="th"
          scope="row"
          padding="none"
          className={classes.tableCell}
        >
          {pokemon.name}
        </TableCell>
      </TableRow>
      <TableRow key={2}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <PokeDetail pokemon={pokemon} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const useTableStyles = makeStyles({
  tableContainer: {},
});


export default function PokemonTable() {
  const classes = useTableStyles();
  const [findNames, { data, loading }] = useLazyQuery(Queries.FIND_NAMES);
  const { searchKey } = useSearchKey();

  const searchNames = (name = "", limit) => {
    if (name === "") name = " ";
    findNames({
      variables: {
        name: name,
        limit,
      },
    });
  };

  useEffect(() => {
    const limit = 20;
    if (searchKey.trim() === "" || searchKey.trim().length > 1) {
      searchNames(searchKey, limit);
    }
  }, [searchKey]);

  if (loading) return <div>Loading...</div>;
  return (
    <div className={classes.tableContainer}>
      <TableContainer component={Paper} style={{ minHeight: "482px" }}>
        <Table aria-label="collapsible table">
          <TableBody>
            {data &&
              data.findNames.map((pokemon) => (
                <Row key={pokemon.name} pokemon={pokemon} />
              ))}
            {!data && <Paper style={{ minHeight: "483px" }}></Paper>}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
