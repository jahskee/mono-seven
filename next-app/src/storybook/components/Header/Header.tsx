import React from 'react';
import AppBar7 from './components/TopMenuBar/TopMenuBar';
import HeroImage from './components/HeroImage/HeroImage';
import Paper from '@material-ui/core/Paper';
function Header() {
  return (
    <Paper style={{padding: 0}}>
      <AppBar7 />
      <HeroImage />
    </Paper>
  )
}

export default Header;