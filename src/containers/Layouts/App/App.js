/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Helmet titleTemplate="%s | Rea Coding Test" />
        <ToastWrapper />
        { this.props.children }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
