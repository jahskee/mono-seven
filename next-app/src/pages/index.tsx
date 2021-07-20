import React from 'react';
import { useAppConfig } from '../appState/appState';
// import Home from './home2/Home';
import Home from '../storybook/pages/Home/Home';

function Index() {
  const { appConfig, setAppConfig } = useAppConfig();
  setAppConfig({...appConfig, isMocked: false})
  return (
    <Home />
  );
}

export default Index;
