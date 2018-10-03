// react library
import React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// components
import Footer from '../../components/Common/Footer';

describe('Footer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it('renders properly', () => {
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('span').length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });
});
