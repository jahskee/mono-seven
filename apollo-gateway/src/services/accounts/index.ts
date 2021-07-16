const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";
import { buildFederatedSchema } from "@apollo/federation";
import { GraphQLResolverMap } from 'apollo-graphql';

(async function startApolloServer() {

  const resolversConv = (resolvers as unknown) as GraphQLResolverMap<unknown>;
  const schema = buildFederatedSchema({ typeDefs, resolvers: resolversConv});

  const server = new ApolloServer({
    schema
  });

  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  await new Promise(resolve => app.listen({ port: 4001 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4001${server.graphqlPath}`);
  return { server, app };
})();
