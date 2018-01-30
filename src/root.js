import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route } from 'react-router-dom';
import getRoutes from 'routes';

const Root = ({
  store,
  client
}) => (
  <ApolloProvider store={store} client={client}>
    <BrowserRouter>
      <Route component={getRoutes} path="/" />
    </BrowserRouter>
  </ApolloProvider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  client: PropTypes.object.isRequired,
};

export default Root;
