import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Table, Box } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    border: 1,
    padding: 0,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.action.hover,
  },
}))(TableRow);

const useStyles = makeStyles({
  root: {
    display: "flex",
    paddingLeft: "1rem",
    paddingBottom: "1rem",
  },
  tableContainer: {
    width: "50%",
    paddingLeft: "5px",
  },
  table: {
    padding: "5",
    paddingLeft: "1rem",
  },
  cell: {
    margin: 0,
    paddingLeft: "10px",
    border: "0",
  },
  tableRow: {
    padding: "10px",
    margin: 0,
  },
  imgRow: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "0.5rem",
  },
  img: {
    width: "70px",
    height: "70px",
    padding: "0",
    marginTop: "0.6rem",
    marginLeft: "0.5rem",
    marginRight: "1rem",
  },
  container: {
    display: "flex",
    width: "100%",
    marginLeft: "10px",
  },
});

export default function PokeDetail({ pokemon }) {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      style={{ paddingBottom: "5px", paddingLeft: "1.5rem" }}
    >
      <TableContainer
        className={classes.tableContainer}
        component={Paper}
        style={{ padding: "2px" }}
      >
        <Table className={classes.table} aria-label="a dense table">
          <TableBody>
            <StyledTableRow key={1}>
              <StyledTableCell className={classes.cell}>
                <b>name</b>
              </StyledTableCell>
              <StyledTableCell className={classes.cell}>
                {pokemon.name}
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow key={2}>
              <StyledTableCell className={classes.cell}>
                <b>weight</b>
              </StyledTableCell>
              <StyledTableCell className={classes.cell}>
                {pokemon.weight + " lbs"}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow key={3}>
              <StyledTableCell className={classes.cell}>
                <b>accuracy</b>
              </StyledTableCell>
              <StyledTableCell className={classes.cell}>
                {pokemon.accuracy}
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer
        component={Paper}
        className={classes.tableContainer}
        style={{ padding: "2px" }}
      >
        <Table className={classes.table} aria-label="customized table">
          <TableBody>
            <StyledTableRow key={4}>
              <StyledTableCell className={classes.cell} align="left">
                <b>power</b>
              </StyledTableCell>
              <StyledTableCell className={classes.cell} align="left">
                {pokemon.power}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow key={5}>
              <StyledTableCell className={classes.cell} align="left">
                <b>generation</b>
              </StyledTableCell>
              <StyledTableCell className={classes.cell} align="left">
                {pokemon.generation}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow key={6}>
              <StyledTableCell className={classes.cell} align="left">
                <b>experience</b>
              </StyledTableCell>
              <StyledTableCell className={classes.cell} align="left">
                {pokemon.xp}
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <div className={classes.imgRow} style={{ paddingTop: 8 }}>
        <img className={classes.img} src={pokemon.image} />
      </div>
    </Box>
  );
}
