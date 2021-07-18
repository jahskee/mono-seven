import Header from "../../components/Header/Header";
import PokemonPaginate from "../../components/PokemonPaginate/PokemonPaginate";
import SearchPanel from "../../components/SearchPanel/SearchPanel";

import Grid from "@material-ui/core/Grid";

function Home() {
  return (
    <Grid container spacing={5}>
      <Grid item sm={12} xs={12}>
        <Header />
      </Grid>
      <Grid container spacing={5}>
        <Grid item sm={6} xs={12}>
          <SearchPanel />
        </Grid>
        <Grid item sm={6} xs={12}>
          <PokemonPaginate />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
