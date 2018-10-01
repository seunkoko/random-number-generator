// react library
import React from 'react';

// third-party libraries
import { mount } from 'enzyme';

// components
import NotFound from '../../components/NotFound';

describe('NotFound', () => {
  const props = { history: { push: jest.fn() } };
  it('renders properly', () => {
    const wrapper = mount(<NotFound {...props} />);

    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should redirect to home page when the button is clicked', () => {
    const wrapper = mount(<NotFound {...props} />);
    wrapper.find('button').simulate('click');
  });
});
