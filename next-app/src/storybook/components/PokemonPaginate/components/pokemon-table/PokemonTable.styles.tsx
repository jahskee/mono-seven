import { makeStyles } from "@material-ui/core/styles";

// -----------  Table Style ------------
const tableCell2 = {
  paddingLeft: "0",
};
export const useTableStyles = makeStyles({
  tableContainer: {
    marginTop: "0",
    minHeight: "489px",
  },
  table: {},
  tbody: {
    //height: '500px',
  },
  tableCell: tableCell2,
  firstCell: {
    ...tableCell2,
    paddingLeft: "0",
  },
  loaderImageContainer: {
    position: "relative",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  loaderImage: {
    position: "relative",
    width: 150,
    height: 150,
    top: 180,
    opacity: 0.4,
  },
});

// ------------- Row Style -------------
const tableCell = {
  padding: "0px",
};

export const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  tableCell,
  firstColumn: {
    ...tableCell,
    width: "2.5rem",
    padding: "4px 0 4px 16px",
  },
  secondColumn: {
    ...tableCell,
    width: "3rem",
    padding: "0",
    paddingLeft: 0,
  },
  imgRow: {
    padding: "0",
  },
  img: {
    width: "20px",
    height: "20px",
    padding: "0",
    marginTop: "10px",
  },
});

export default useRowStyles;
