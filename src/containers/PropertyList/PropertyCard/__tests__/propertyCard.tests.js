import React from 'react';
import { shallow } from 'enzyme';
import PropertyCard from '../PropertyCard';

let props;

beforeEach(() => {
  props = {
    items: [{
      price: '$726,500',
      agency: {
        brandingColors: {
          primary: '#ffe512'
        },
        logo: 'http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif'
      },
      id: 1,
      mainImage: 'http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg'
    }, {
      price: '$560,520',
      agency: {
        brandingColors: {
          primary: '#fcfa3b'
        },
        logo: 'http://i4.au.reastatic.net/agencylogo/BFERIC/12/20150619122858.gif'
      },
      id: 2,
      mainImage: 'http://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg'
    }, {
      price: '$826,500',
      agency: {
        brandingColors: {
          primary: '#57B5E0'
        },
        logo: 'http://i1.au.reastatic.net/agencylogo/XCEWIN/12/20150807093203.gif'
      },
      id: 3,
      saved: true,
      mainImage: 'http://i4.au.reastatic.net/640x480/98cee1b2a3a64329921fc38f7e2926a78d41fcc683fc48fb8a8ef2999b14c027/main.jpg'
    }],
    title: 'Results'
  };
});

describe('SiteModal structure tests', () => {
  it('should call onHandleAddItem prop with correct item', () => {
    props.onHandleAddItem = jest.fn();
    const wrapper = shallow(
      <PropertyCard {...props} />
    );
    wrapper.find('.Button').first().simulate('click');
    expect(props.onHandleAddItem).toHaveBeenCalledWith(props.items[0]);
  });

  it('should call onHandleRemoveItem prop with correct item', () => {
    props.onHandleRemoveItem = jest.fn();
    const wrapper = shallow(
      <PropertyCard {...props} />
    );
    wrapper.setState({
      showButton: 1
    });
    wrapper.find('.Button').first().simulate('click');
    expect(props.onHandleRemoveItem).toHaveBeenCalledWith(1);
    expect(wrapper.state().showButton).toEqual(null);
  });

  it('should call handleAddHover and set the correct state', () => {
    const wrapper = shallow(
      <PropertyCard {...props} />
    );
    wrapper.find('Card').first().simulate('mouseEnter');
    expect(wrapper.state().showButton).toEqual(0);
  });

  it('should call handleRemoveHover and set the correct state', () => {
    const wrapper = shallow(
      <PropertyCard {...props} />
    );
    wrapper.setState({
      showButton: 0
    });
    wrapper.find('Card').first().simulate('mouseLeave');
    expect(wrapper.state().showButton).toEqual(null);
  });

  it('should check the button text for a saved property', () => {
    const wrapper = shallow(
      <PropertyCard {...props} />
    );
    expect(wrapper.find('.Saved').length).toEqual(1);
  });
});
