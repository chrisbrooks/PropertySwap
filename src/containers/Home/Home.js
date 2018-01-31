/* eslint-disable */
import React, { Component } from 'react';

import Card from 'components/Shared/Card/Card';
import styles from './home.scss';

class Home extends Component {
  render() {
    const {
      loading,
      results,
      saved
    } = this.props;

    console.log(saved);
    console.log(results);

    return (
      <div className={styles.Container}>
        <div className={styles.Wrapper}>
          <div className={styles.Cards}>
            {
              results && results.map((result) => (
                <Card key={result.id}>
                  <div style={{backgroundColor: result.agency.brandingColors.primary}}>
                    <img
                      className={styles.Logo}
                      src={result.agency.logo}
                      alt="agency logo" />
                  </div>
                  <img
                    className={styles.Image}
                    src={result.mainImage}
                    alt="property image" />
                  <p className={styles.Price}>{result.price}</p>
                </Card>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
 }

export default Home;
