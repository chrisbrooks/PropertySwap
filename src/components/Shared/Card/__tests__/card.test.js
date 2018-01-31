import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';

let props;

describe('Card tests', () => {
  const onClick = jest.fn();
  beforeEach(() => {
    props = {
      className: 'Pooh',
      onClick,
      remove: true,
      children: [],
      noPadding: true
    };
  });

  it('should render with the correct class', () => {
    const card = shallow(<Card {...props} />);

    expect(card.find('.Card').length).toEqual(1);
    expect(card.find('.Pooh').length).toEqual(1);
    expect(card.find('.noPadding').length).toEqual(1);
  });

  it('should render without the noPadding class when noPadding prop is false', () => {
    props.noPadding = false;
    const card = shallow(<Card {...props} />);

    expect(card.find('.noPadding').length).toEqual(0);
  });

  it('should render remove icon', () => {
    const card = shallow(<Card {...props} />);

    expect(card.find('Icon').length).toEqual(1);
  });

  it('should render without remove icon when remove prop is false', () => {
    props.remove = false;
    const card = shallow(<Card {...props} />);

    expect(card.find('Icon').length).toEqual(0);
  });
});
