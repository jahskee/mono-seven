import * as React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'localhost:4000/graphql',
  cache: new InMemoryCache(),
});
import DrawerNavigator from './components/drawer/DrawerNavigation';

function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
