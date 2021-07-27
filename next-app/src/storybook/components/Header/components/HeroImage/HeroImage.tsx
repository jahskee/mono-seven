import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heroImage: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    backgroundImage: "url(https://source.unsplash.com/user/erondu)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    overflow: "hidden",
  },
  container: {},
  logoImage: {},
  logo: {
    float: "right",
    width: "7rem",
    height: "12rem",
    padding: "2.5rem 1rem 2.5rem",
  },
}));

function HeroImage() {
  const classes = useStyles();
  return (
    <div className={classes.heroImage} style={{ padding: 0 }}>
      <img
        src="https://i.imgur.com/fyiDwMC.png"
        className={classes.logo}
        alt="7eleveln logo"
      />
    </div>
  );
}

export default HeroImage;
