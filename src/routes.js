import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import App from 'containers/Layouts/App/App';
import Home from 'containers/Home/Home';

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
        component={Home} />
    </Switch>
  );
}

Layout.propTypes = {
  component: PropTypes.func.isRequired
};
