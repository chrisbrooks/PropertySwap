import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';

let props;

beforeEach(() => {
  props = {
    className: 'blobby',
    children: <p>sdsdsd</p>,
    onMouseEnter: jest.fn(),
    onMouseLeave: jest.fn()
  };
});

it('should check the props are correct', () => {
  const wrapper = shallow(
    <Card {...props} />
  );
  expect(wrapper.find('article p').text()).toEqual('sdsdsd');
  expect(wrapper.find('.blobby').length).toEqual(1);

  wrapper.find('article').simulate('mouseEnter');
  wrapper.find('article').simulate('mouseLeave');
  expect(props.onMouseEnter).toHaveBeenCalled();
  expect(props.onMouseLeave).toHaveBeenCalled();
});
