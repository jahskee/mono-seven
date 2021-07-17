import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./image/7eleven.png";

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
    padding: "5rem 1rem 0.4rem",
  },
}));

function HeroImage() {
  const classes = useStyles();
  return (


        <div className={classes.heroImage}>
          <img src={logo} className={classes.logo} alt="7eleveln logo" />
        </div>

  );
}

export default HeroImage;
