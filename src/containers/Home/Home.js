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
    this.handleRemovePropertyFromSavedList = this.handleRemovePropertyFromSavedList.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        results: nextProps.results,
        saved: nextProps.saved
      });
    }
  }

  handleAddPropertyToSavedList(result) {
    console.log('sdsd');
    console.log(result);

    this.setState({
      saved: [...this.state.saved, result]
    });
  }

  handleRemovePropertyFromSavedList(e) {
    var array = this.state.saved;
    var index = array.indexOf(e.target.value)
    array.splice(index, 1);
    this.setState({saved: array });
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
    console.log(this.state.saved);

    console.log(this.props.results);
    console.log(this.props.saved);

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
              this.state.saved && this.state.saved.map((save, index) => (
                <Card
                  key={save.id}
                  onMouseEnter={() => this.handleToggleHover(index)}
                  onMouseLeave={() => this.handleToggleHover(index)}>
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
                    onClick={this.handleRemovePropertyFromSavedList}
                    className={this.state.showButton === index ? styles.ButtonHover : styles.Button}>
                    Remove property
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
