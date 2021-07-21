import express from "express";
import { ApolloGateway } from "@apollo/gateway";
import { ApolloServer } from "apollo-server-express";

(async function startApolloServer() {
  const port = "4000";
  const server_url = "http://localhost:4000";

  const gateway = new ApolloGateway({
    serviceList: [{ name: "pokemons", url: "http://localhost:4001/graphql" }],
  });

  const server = new ApolloServer({
    gateway,
    subscriptions: false,
  });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  await new Promise((resolve: any) => app.listen({ port }, resolve));
  console.log(`🚀 Server/Gateway ready at ${server_url}${server.graphqlPath}`);
})();
