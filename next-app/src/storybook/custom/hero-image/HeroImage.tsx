import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from './image/7eleven.png';

const useStyles = makeStyles((theme) => ({
  heroImage: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    overflow: 'hidden',
  },
  container: {},
  logoImage: {},
  logo: {float: 'right', width: '7rem', height: '12rem', padding:'5rem 1rem 0.4rem'},
}));

function HeroImage() {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      {/* Increase the priority of the hero background image */}
      <img
        style={{ display: "none" }}
        src="https://source.unsplash.com/user/erondu"
        alt="background"
      />
      <Grid container>
        <Grid item md={12}>
          <div className={classes.heroImage}>
            <img
              src={logo}
              className={classes.logo}
              alt="7eleveln logo"
            />
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default HeroImage;
