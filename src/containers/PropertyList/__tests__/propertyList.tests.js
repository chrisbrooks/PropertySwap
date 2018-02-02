import React from 'react';
import { shallow } from 'enzyme';
import PropertyList from '../PropertyList';

let props;

beforeEach(() => {
  props = {
    results: [{
      price: '$726,500',
      agency: {
        brandingColors: {
          primary: '#ffe512'
        },
        logo: 'logo.png'
      },
      id: 1,
      mainImage: 'mainImage.png'
    }, {
      price: '$560,520',
      agency: {
        brandingColors: {
          primary: '#fcfa3b'
        },
        logo: 'logo.png'
      },
      id: 2,
      mainImage: 'mainImage.png'
    }],
    saved: [{
      price: '$526,500',
      agency: {
        brandingColors: {
          primary: '#000000'
        },
        logo: 'logo.png'
      },
      id: 4,
      mainImage: 'mainImage.png'
    }],
    loading: false
  };
});

it('should check the state is set in componentWillReceiveProps', () => {
  props.saved = [];
  props.results = [];
  const wrapper = shallow(
    <PropertyList {...props} />
  );

  const nextProps = {
    saved: [{
      id: 2
    }],
    results: [{
      id: 1
    }]
  };

  wrapper.instance().componentWillReceiveProps(nextProps);

  expect(wrapper.state().results).toEqual(nextProps.results);
  expect(wrapper.state().saved).toEqual(nextProps.saved);

});

it('should check if loading icon is shown', () => {
  props.loading = true;
  const wrapper = shallow(
    <PropertyList {...props} />
  );
  expect(wrapper.find('PageLoader').length).toEqual(1);
});

it('should check if loading icon is not shown', () => {
  props.loading = false;
  const wrapper = shallow(
    <PropertyList {...props} />
  );
  expect(wrapper.find('PageLoader').length).toEqual(0);
});

it('should check state set from props', () => {
  const wrapper = shallow(
    <PropertyList {...props} />
  );
  expect(wrapper.state().results).toEqual(props.results);
  expect(wrapper.state().saved).toEqual(props.saved);
});

it('should check the props are correct for the propertyCard', () => {
  const wrapper = shallow(
    <PropertyList {...props} />
  );
  expect(wrapper.find('PropertyCard').first().prop('items')).toEqual(props.results);
  expect(wrapper.find('PropertyCard').at(1).prop('items')).toEqual(props.saved);
});

it('should check the property has been removed', () => {
  const wrapper = shallow(
    <PropertyList {...props} />
  );

  wrapper.instance().handleRemovePropertyFromSavedList(4);
  expect(wrapper.state().saved).toEqual([]);
});

it('should check the property has been added saved toggle is set', () => {
  const wrapper = shallow(
    <PropertyList {...props} />
  );

  wrapper.instance().handleAddPropertyToSavedList(props.results[0]);
  expect(wrapper.state().saved).toEqual([{
    price: '$526,500',
    agency: {
      brandingColors: {
        primary: '#000000'
      },
      logo: 'logo.png'
    },
    id: 4,
    mainImage: 'mainImage.png'
  },
  {
    price: '$726,500',
    agency: {
      brandingColors: {
        primary: '#ffe512'
      },
      logo: 'logo.png'
    },
    id: 1,
    mainImage: 'mainImage.png'
  }]);

  expect(wrapper.state().results).toEqual([{
    price: '$726,500',
    agency: {
      brandingColors: {
        primary: '#ffe512'
      },
      logo: 'logo.png'
    },
    saved: true,
    id: 1,
    mainImage: 'mainImage.png'
  }, {
    price: '$560,520',
    agency: {
      brandingColors: {
        primary: '#fcfa3b'
      },
      logo: 'logo.png'
    },
    id: 2,
    mainImage: 'mainImage.png'
  }]);
});
