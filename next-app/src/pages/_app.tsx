import React from "react";
import { ApolloProvider } from "@apollo/client";
import T from "prop-types";
import client from "./apollo-client";
import './styles.css'

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useDarkMode } from "../appState/appState";
import { StylesProvider } from "@material-ui/core/styles";

function MyApp({ Component, pageProps }) {
  const { darkMode } = useDarkMode();

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  return (
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
        <StylesProvider>
          <CssBaseline />
          <Component {...pageProps} />
          </StylesProvider>
        </ThemeProvider>
     
    </ApolloProvider>
  );
}
MyApp.propTypes = {
  Component: T.elementType.isRequired,
};
export default MyApp;
