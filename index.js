import { ApolloServer } from 'apollo-server';

import { RestAPI } from './src/providers/api';
import typeDefs from './src/modules/colaborator/typeDefs.gql';
import resolvers from './src/modules/colaborator/resolvers';

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