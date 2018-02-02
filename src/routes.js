import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import App from 'containers/App/App';
import PropertyListWithData from 'containers/PropertyList/PropertyListWithData';

const Layout = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={matchProps => (
      <App {...matchProps} {...rest}>
        <Component {...matchProps} {...rest} />
      </App>
    )
  } />
);

export default function getRoutes() {
  return (
    <Switch>
      <Layout
        path="/"
        component={PropertyListWithData} />
    </Switch>
  );
}

Layout.propTypes = {
  component: PropTypes.func.isRequired
};
