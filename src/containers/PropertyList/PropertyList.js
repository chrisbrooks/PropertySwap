import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import PageLoader from 'components/Shared/PageLoader/PageLoader';
import PropertyCard from './PropertyCard/PropertyCard';
import styles from './propertyList.scss';

class PropertyList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results: props.results,
      saved: props.saved
    };

    this.handleAddPropertyToSavedList = this.handleAddPropertyToSavedList.bind(this);
    this.handleRemovePropertyFromSavedList = this.handleRemovePropertyFromSavedList.bind(this);
    this.handleToggleSavedFlag = this.handleToggleSavedFlag.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // check if props have been updated to then update the state. With graphql mutations this would not be needed
    // the props would be updated with the mutation, but for now this is fine to demonstrate the functionality
    if (this.props.results !== nextProps.results || this.props.saved !== nextProps.saved) {
      this.setState({
        results: nextProps.results,
        saved: nextProps.saved
      });
    }
  }

  // handle setting the property saved flat on state
  handleToggleSavedFlag(id) {
    const toggleSavedFlag = this.state.results.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          saved: !item.saved
        };
      }
      return item;
    });

    this.setState({
      results: toggleSavedFlag
    });
  }

  // add the property to the saved list
  handleAddPropertyToSavedList(property) {
    if (this.state.saved.indexOf(property) < 1) {
      this.handleToggleSavedFlag(property.id);
      this.setState({
        saved: [...this.state.saved, property]
      });
    }
  }

  // remove the property from the saved list
  handleRemovePropertyFromSavedList(propertyId) {
    const savedProperties = this.state.saved;
    const updatedSavedProperties = savedProperties.filter(property => property.id !== propertyId);
    this.handleToggleSavedFlag(propertyId);
    this.setState({ saved: updatedSavedProperties });
  }

  render() {
    const {
      loading
    } = this.props;

    let pageContent = (
      <div className={styles.Container}>
        <Helmet title="REA Coding Test" />
        <div className={styles.Wrapper}>
          <PropertyCard
            title="Results"
            items={this.state.results}
            onHandleAddItem={this.handleAddPropertyToSavedList}
          />
          <PropertyCard
            title="Saved properties"
            items={this.state.saved}
            onHandleRemoveItem={this.handleRemovePropertyFromSavedList}
          />
        </div>
      </div>
    );

    if (loading) {
      pageContent = <PageLoader />;
    }

    return pageContent;
  }
}

PropertyList.propTypes = {
  results: PropTypes.array,
  saved: PropTypes.array,
  loading: PropTypes.bool
};

export default PropertyList;
