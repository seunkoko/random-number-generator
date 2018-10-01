// react library
import React from 'react';

// third-party libraries
import { mount } from 'enzyme';

// components
import Footer from '../../components/Common/Footer';

describe('Footer', () => {

  it('renders properly', () => {
    const wrapper = mount(<Footer />);

    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('span').length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });
});
