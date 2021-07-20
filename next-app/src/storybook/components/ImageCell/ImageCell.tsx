import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const tableCell = {
  padding: "0px",
};

const useRowStyles = makeStyles({
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

function ImageCell({ pokemon }) {
  const classes = useRowStyles();
  return (
    <div className={classes.imgRow}>
      <img className={classes.img} src={pokemon.image} />
    </div>
  );
}

export default ImageCell;
