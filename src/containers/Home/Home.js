/* eslint-disable */
import React, { Component } from 'react';

import Card from 'components/Shared/Card/Card';
import styles from './home.scss';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results: props.results,
      saved: props.saved,
      showButton: null
    }

    this.handleAddPropertyToSavedList = this.handleAddPropertyToSavedList.bind(this);
    this.handleToggleHover = this.handleToggleHover.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.results !== nextProps.results) {
      this.state = { results: nextProps.results };
    }

    if (this.props.saved !== nextProps.saved) {
      this.state = { results: nextProps.saved };
    }
  }

  handleAddPropertyToSavedList(result) {
    console.log('sdsd');
    console.log(result);

    this.setState({
      saved: [...this.state.saved, result]
    });
  }

  handleToggleHover(index) {
    if (this.state.showButton === index) {
      this.setState({
        showButton: null
      });
    }
    else {
      this.setState({
        showButton: index
      });
    }
  }


  render() {
    const {
      loading,
      results,
      saved
    } = this.props;

    console.log(this.state.results);
    console.log(results);

    return (
      <div className={styles.Container}>
        <div className={styles.Wrapper}>
          <div className={styles.Cards}>
            {
              this.state.results && this.state.results.map((result, index) => (
                <Card
                  key={result.id}
                  onMouseEnter={() => this.handleToggleHover(index)}
                  onMouseLeave={() => this.handleToggleHover(index)}>
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
                  <div
                    onClick={() => this.handleAddPropertyToSavedList(result)}
                    className={this.state.showButton === index ? styles.ButtonHover : styles.Button}>
                    Add property
                  </div>
                </Card>
              )
            )}
          </div>
          <div className={styles.Cards}>
            {
              this.state.saved && this.state.saved.map((save) => (
                <Card key={save.id}>
                  <div style={{backgroundColor: save.agency.brandingColors.primary}}>
                    <img
                      className={styles.Logo}
                      src={save.agency.logo}
                      alt="agency logo" />
                  </div>
                  <img
                    className={styles.Image}
                    src={save.mainImage}
                    alt="property image" />
                  <p className={styles.Price}>{save.price}</p>
                  <div
                    onClick={() => this.addPropertyToSavedList(result)}
                    className={styles.Button}>
                    Add property
                  </div>
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
