import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import { gql, useLazyQuery } from '@apollo/client';
import { Button } from '@material-ui/core';
import logo from '../../assets/images/7eleven.png';
import useStyles from './Home.styles';
import Organization from './Organization';

import useReactiveVars from '../../appState';

const getRecStart = (page, recordPerPage) => page * recordPerPage;

const getRecEnd = (recStart, total, recordPerPage) => {
  let recEnd = recStart + recordPerPage - 1;
  recEnd = recEnd < total ? recEnd : total;
  return recEnd;
};

const ALL_ORGANIZATION_IDS = gql`
  query allOrganizations {
    allOrganizations {
      id
    }
  }
`;

function Home() {
  const classes = useStyles();

  const { usePage, useOrgList, useRecordPerPage } = useReactiveVars();
  const { page, setPage } = usePage();
  const { orgList, setOrgList } = useOrgList();
  const { recordPerPage } = useRecordPerPage();

  const [getOrgIds, { loading, error, data }] = useLazyQuery(
    ALL_ORGANIZATION_IDS,
  );

  if (loading) return <div>Loading...</div>;
  if (error) return `Error! ${error}`;

  if (orgList.length === 0) {
    getOrgIds();
    if (data) {
      let pageCt = 0;
      const pagedOrgList = data.allOrganizations.map((item, index) => {
        const modulo = index % recordPerPage;
        if (modulo === 0 && index !== 0) {
          pageCt += 1;
        }
        return { id: item.id, page: pageCt };
      });
      setOrgList(pagedOrgList);
    }
  }

  const totalRecs = orgList.length;
  const totalPages = parseInt(totalRecs / recordPerPage, 10);
  const recStart = getRecStart(page, recordPerPage);
  const recEnd = getRecEnd(recStart, totalRecs, recordPerPage);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <Box>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.container}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Home
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            <img
              style={{ display: 'none' }}
              src="https://source.unsplash.com/user/erondu"
              alt="background"
            />
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <img src={logo} className={classes.logo} alt="7eleveln logo" />
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}

          <div>
            <h2>Paginate</h2>
            <Button color="primary">Hello</Button>
            <p>
              <button type="button" onClick={handlePrevPage}>{'<'}</button>
              {' '}
              {recStart}
              -
              {recEnd}
              {' '}
              <button type="button" onClick={handleNextPage}>{'>'}</button>
              {' '}
              of
              {' '}
              {totalRecs}
            </p>
            {orgList
        && orgList
          .filter((item) => item.page === page)
          .map((item) => (
            <div key={item.id}>
              <Organization id={item.id} />
            </div>
          ))}
          </div>
        </main>

      </Container>
    </Box>
  );
}

export default Home;
