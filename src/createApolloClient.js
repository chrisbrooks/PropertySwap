import { ApolloClient } from 'react-apollo';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';

import { typeDefs } from './graphql/schema';
import mocks from './graphql/mocks';

export default () => {
  const schema = makeExecutableSchema({ typeDefs });

  addMockFunctionsToSchema({
    schema,
    mocks
  });

  const networkInterface = mockNetworkInterfaceWithSchema({ schema });

  const client = new ApolloClient({ networkInterface });

  return client;
};
