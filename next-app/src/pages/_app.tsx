import React from "react";
import { ApolloProvider } from "@apollo/client";
import T from "prop-types";
import client from "./apollo-client";
import './styles.css'

//import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useReactiveVars from "../appState";
import { StylesProvider } from "@material-ui/core/styles";

function MyApp({ Component, pageProps }) {
  //const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const { useDarkMode } = useReactiveVars();
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
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </StylesProvider>
    </ApolloProvider>
  );
}
MyApp.propTypes = {
  Component: T.elementType.isRequired,
};
export default MyApp;
