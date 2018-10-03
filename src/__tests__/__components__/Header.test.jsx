// react library
import React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// components
import Header from '../../components/Common/Header';

describe('Header', () => {
  const props = {
    homeActive: false,
    operationsActive: true,
  };

  it('renders properly', () => {
    const wrapper = shallow(<Header {...props} />);

    expect(wrapper.find('nav').length).toEqual(1);
    expect(wrapper.find('ul').length).toEqual(1);
    expect(wrapper.find('li').length).toEqual(2);
    expect(wrapper).toMatchSnapshot();
  });

  it('should reload to home page when the Home Tab is clicked', () => {
    const wrapper = shallow(<Header {...props} />);
    wrapper.find('#homeTab').simulate('click');
  });

  it('should redirect to the operations page when the Operations Tab is clicked', () => {
    const wrapper = shallow(<Header {...props} />);
    wrapper.find('#operationsTab').simulate('click');
  });
});
