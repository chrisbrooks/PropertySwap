import React from 'react';
import { shallow } from 'enzyme';
import CardTitle from '../CardTitle';

let props;

describe('CardTitle tests', () => {

  beforeEach(() => {
    props = {
      className: 'Pooh'
    };
  });

  it('should render with the correct class', () => {
    const pillWrapper = shallow(<CardTitle {...props} />);

    expect(pillWrapper.find('.Title').length).toEqual(1);
    expect(pillWrapper.find('.Pooh').length).toEqual(1);
  });

});
