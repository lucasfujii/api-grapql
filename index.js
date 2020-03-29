import { ApolloServer } from 'apollo-server';

import { RestAPI } from './api';
import typeDefs from './typeDefs.gql';
import resolvers from './resolvers';

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  dataSources: () => ({
    restApi: new RestAPI(),
  }), 
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});