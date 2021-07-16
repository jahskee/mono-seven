import React from 'react';
import { ApolloProvider } from '@apollo/client';
import T from 'prop-types';
import client from './apollo-client';

// pages/_app.js

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
MyApp.propTypes = {
  Component: T.elementType.isRequired,
  pageProps: T.node.isRequired,
};
export default MyApp;
