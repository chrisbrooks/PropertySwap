import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from 'components/Shared/Card/Card';
import styles from './propertyCard.scss';

class PropertyCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showButton: null
    };

    this.handleToggleHover = this.handleToggleHover.bind(this);
  }

  // toggle the hover effect on the property tile
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
      items,
      onHandleAddItem,
      onHandleRemoveItem,
      title
    } = this.props;

    // handle if the item needs to be added or removed
    const onHandleClick = (item, index) => {
      if (onHandleAddItem) {
        onHandleAddItem(item);
      }
      else {
        onHandleRemoveItem(item.id);
        this.handleToggleHover(index);
      }
    };

    return (
      <div className={styles.Cards}>
        <h1 className={styles.Title}>{title}</h1>
        {
          items && items.map((item, index) => (
            <Card
              key={item.id}
              onMouseEnter={() => this.handleToggleHover(index)}
              onMouseLeave={() => this.handleToggleHover(index)}>
              <div style={{ backgroundColor: item.agency.brandingColors.primary }}>
                <img
                  className={styles.Logo}
                  src={item.agency.logo}
                  alt="logo" />
              </div>
              <img
                className={styles.Image}
                src={item.mainImage}
                alt="property" />
              <p className={styles.Price}>{item.price}</p>
              { !item.saved ? (
                <div
                  onClick={() => onHandleClick(item, index)}
                  className={this.state.showButton === index ? styles.ButtonHover : styles.Button}>
                  {onHandleAddItem ? 'Add property' : 'Remove property'}
                </div>
              ) : (
                <p className={styles.Saved}>
                  Property saved
                </p>
              )}
            </Card>
          )
        )}
      </div>
    );
  }
}

PropertyCard.propTypes = {
  items: PropTypes.array,
  onHandleAddItem: PropTypes.func,
  onHandleRemoveItem: PropTypes.func,
  title: PropTypes.string
};

export default PropertyCard;
