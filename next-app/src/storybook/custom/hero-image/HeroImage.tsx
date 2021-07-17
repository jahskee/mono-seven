import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "1rem",
  },
}));

function MyAppBar() {
  const classes = useStyles();
  return (
    <Box>
      <Typography>
        Hello World
      </Typography>
    </Box>
  );
}

export default MyAppBar;
