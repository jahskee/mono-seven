import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("ID", 159, "Order", 24),
  createData("Height", 237, "XP", 37),
  createData("Weight", 262),
];

const useStyles = makeStyles({
  root: {
    paddingLeft: '2rem',
    paddingBottom: '1rem',
  },
  table: {
    minWidth: 300,
    padding: "5",
    paddingLeft: '8px',
  },
  cell: {
    padding: "5px"
  },
  imgRow: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: '1rem'
  },
  img: {
    width: '40px',
    padding: '0'
  }
});

export default function PokeDetail() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.imgRow}>
        <img
          className={classes.img}
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png"
        />
      </div>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell className={classes.cell} align="left">
                  <b>{row.name}</b>
                </StyledTableCell>
                <StyledTableCell className={classes.cell} align="left">
                  {row.calories}
                </StyledTableCell>
                <StyledTableCell className={classes.cell} align="left">
                  <b>{row.fat}</b>
                </StyledTableCell>
                <StyledTableCell className={classes.cell} align="left">
                  {row.carbs}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
