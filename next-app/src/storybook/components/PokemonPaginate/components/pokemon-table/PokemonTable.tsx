import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import PokeDetail from "../../../PokeDetail/PokeDetail";
import { useTableStyles, useRowStyles } from "./PokemonTable.styles";

function Row({ pokemon }) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow key={1} className={classes.root}>
        <TableCell padding="none" className={classes.firstColumn}>
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
          style={{ padding: 0, width: '8%' }}
        >
          <div className={classes.imgRow}>
            <img className={classes.img} src={pokemon.image} />
          </div>
        </TableCell>

        <TableCell component="th" scope="row" padding="none" align="left">
          {pokemon.name}
        </TableCell>
        <TableCell className={classes.tableCell} align="left">
          {pokemon.generation}
        </TableCell>
        <TableCell className={classes.tableCell} align="left">
          {pokemon.weight + " lbs"}
        </TableCell>
        <TableCell className={classes.tableCell} align="left">
          {pokemon.xp}
        </TableCell>
      </TableRow>
      <TableRow key={2}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1} paddingLeft={1}>
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

export default function PokemonTable({ pokemons }) {
  const classes = useTableStyles();
  return (
    <Paper className={classes.tableContainer}>

      <TableContainer>
        <Table className={classes.table} aria-label="collapsible table" >
          <TableHead>
            <TableRow key={1}>
              <TableCell />
              <TableCell ></TableCell>
              <TableCell className={classes.firstCell} align="left" >
                Name
              </TableCell>
              <TableCell className={classes.tableCell} align="left" >
                Generation
              </TableCell>
              <TableCell className={classes.tableCell} align="left" >
                Weight
              </TableCell>
              <TableCell className={classes.tableCell} align="left" >
                Experience
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.tbody} style={{position: 'relative', top: 0, bottom: 0, left: 0, right: 0}}>
            {pokemons &&
              pokemons.map((pokemon) => (
                <Row key={pokemon.name} pokemon={pokemon} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {!pokemons && (
        <div className={classes.loaderImageContainer}>
          <img
           className={classes.loaderImage}
            src="../images/loading2.gif"
          />
        </div>
      )}
    </Paper>
  );
}
