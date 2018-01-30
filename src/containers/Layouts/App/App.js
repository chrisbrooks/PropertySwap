/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import ToastWrapper from 'components/Shared/Toast/ToastWrapper';
import Header from 'components/Shared/Header/Header';
import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Helmet titleTemplate="%s | Rea Coding Test" />
        <ToastWrapper />
        <Header />
        { this.props.children }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
