import React from 'react';
import PropTypes from 'prop-types';

import ToastWrapper from 'components/Shared/Toast/ToastWrapper';
import Header from 'components/Shared/Header/Header';
import styles from './app.scss';

export const App = ({ children }) => (
  <div>
    <ToastWrapper />
    <Header />
    <div className={styles.Container}>
      {children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.object
};

export default App;
