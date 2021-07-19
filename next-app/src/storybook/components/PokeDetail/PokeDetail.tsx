import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Table, Card } from "@material-ui/core";
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
    paddingLeft: "1px",
    
  },
  table: {
    padding: "5",
  },
  cell: {
    padding: '5px',
    paddingLeft: "1rem",
    //paddingTop: "8px",
  },
  imgRow: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "0.5rem",
  },
  img: {
    width: "40px",
    height: "40px",
    padding: "0",
    marginTop: "1.2rem",
  },
  container: {
    display: "flex",
    width: "100%",
  },
});

export default function PokeDetail({pokemon}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.imgRow}>
        <img className={classes.img} src={pokemon.image} />
      </div>

      <Card className={classes.container}>
        <Paper></Paper>
        <TableContainer className={classes.tableContainer}>
          <Table className={classes.table} aria-label="a dense table">
            <TableBody>
            <StyledTableRow key={pokemon.id} className={classes.tableRow}>
                <StyledTableCell className={classes.cell} align="left">
                  <b>name</b>
                </StyledTableCell>
                <StyledTableCell className={classes.cell} align="left">
                  {pokemon.name}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key={pokemon.id}>
                <StyledTableCell className={classes.cell} >
                  <b>id</b>
                </StyledTableCell>
                <StyledTableCell className={classes.cell} align="left">
                  {pokemon.id}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key={pokemon.id}>
                <StyledTableCell className={classes.cell} align="left">
                  <b>height</b>
                </StyledTableCell>
                <StyledTableCell className={classes.cell} align="left">
                  {pokemon.height}
                </StyledTableCell>
              </StyledTableRow>
          
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} aria-label="customized table">
            <TableBody>
            <StyledTableRow key={pokemon.id}>
                <StyledTableCell className={classes.cell} align="left">
                  <b>weight</b>
                </StyledTableCell>
                <StyledTableCell className={classes.cell} align="left">
                  {pokemon.weight}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key={pokemon.id}>
                <StyledTableCell className={classes.cell} align="left">
                  <b>order</b>
                </StyledTableCell>
                <StyledTableCell className={classes.cell} align="left">
                  {pokemon.order}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow key={pokemon.id}>
                <StyledTableCell className={classes.cell} align="left">
                  <b>xp</b>
                </StyledTableCell>
                <StyledTableCell className={classes.cell} align="left">
                  {pokemon.xp}
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
}
