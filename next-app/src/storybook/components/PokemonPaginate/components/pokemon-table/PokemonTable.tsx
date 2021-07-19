import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
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
import './PokemonTable.module.css';

const tableCell ={
  padding: '0px',
 // paddingRight: '1rem',
};

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  tableCell,
  firstColumn: {
    ...tableCell,
    width: '2.5rem',
    padding: '4px 0 4px 16px'
  },
  secondColumn: {
    ...tableCell,
    width: '3rem',
    padding: '0',
    paddingLeft: 0,

    //paddingBottom: '0',
  },
  imgRow: {
    padding: '0',
  },
  img: {
    width: "20px",
    height: "20px",
    padding: '0',
    marginTop: "10px",
  },
});

function Row({ pokemon }) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell padding="none"  className={classes.firstColumn} >
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell className={classes.secondColumn} style={{padding:0, width: 35}}>
          <div className={classes.imgRow}>
          <img className={classes.img} src={pokemon.image} />
          </div>
        </TableCell>

        <TableCell component="th" scope="row" padding="none" align="left">
       
          {pokemon.name}
        </TableCell>
        <TableCell className={classes.tableCell} align="left">{pokemon.generation}</TableCell >
        <TableCell className={classes.tableCell} align="left">{pokemon.weight+" lbs"}</TableCell>
        <TableCell className={classes.tableCell} align="left">{pokemon.xp}</TableCell>

      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1} paddingLeft={1}>
             <PokeDetail pokemon={pokemon}/>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const tableCell2 = {
  paddingLeft: '0',
}
const useTableStyles = makeStyles({
  tableContainer: {
    marginTop: "0",
  },
  table: {
   
  },
  tableCell: tableCell2,
  firstCell: {
    ...tableCell,
    paddingLeft: '0',
  }
});

export default function PokemonTable({pokemons}) {
  const classes = useTableStyles();
  return (
    <Paper className={classes.tableContainer}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell ></TableCell>
              <TableCell className={classes.firstCell} align="left">Name</TableCell>
              <TableCell className={classes.tableCell} align="left">Generation</TableCell>
              <TableCell className={classes.tableCell} align="left">Weight</TableCell>
              <TableCell className={classes.tableCell} align="left">Experience</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pokemons.map((pokemon) => (
              <Row key={pokemon.name} pokemon={pokemon} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
