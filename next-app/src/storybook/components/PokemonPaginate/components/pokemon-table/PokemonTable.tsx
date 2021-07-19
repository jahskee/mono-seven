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

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  tableCell: {
    padding: '6px',
    paddingRight: '1rem'
  },
  firstColumn: {
    width: '2.5rem',
    paddingRight: '0'
  },
  imgRow: {
  //  display: "flex",
  //  justifyContent: "flex-end",
   // paddingRight: "0.5rem",
  },
  img: {
    width: "25px",
    height: "25px",
    padding: "0",
    //marginTop: "1.2rem",
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell padding="none"  className={`${classes.tableCell} ${classes.firstColumn}`} >
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell className={classes.tableCell} >
          <div className={classes.imgRow}>
          <img className={classes.img} src={row.image} />
          </div>
        </TableCell>

        <TableCell component="th" scope="row" padding="none">
       
          {row.name}
        </TableCell>
        <TableCell className={classes.tableCell} align="right">{row.height}</TableCell >
        <TableCell className={classes.tableCell} align="right">{row.weight}</TableCell>
        <TableCell className={classes.tableCell} align="right">{row.order}</TableCell>

      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
             <PokeDetail pokemon={row}/>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const useTableStyles = makeStyles({
  tableContainer: {
    marginTop: "0",
  },
  table: {
   
  }
});

export default function PokemonTable({rows}) {
  const classes = useTableStyles();
  return (
    <div className={classes.tableContainer}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="right"></TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="right">Height</TableCell>
              <TableCell align="right">Weight</TableCell>
              <TableCell align="right">Order</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
