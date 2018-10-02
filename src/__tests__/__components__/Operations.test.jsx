// react library
import React from 'react';

// third-party libraries
import { mount } from 'enzyme';

// components
import Operations from '../../components/Operations';

describe('Operations', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Operations />);
  });

  it('renders properly', () => {
    expect(wrapper.find('div').length).toEqual(15);
    expect(wrapper.find('h5').length).toEqual(2);
    expect(wrapper.find('p').length).toEqual(2);
    expect(wrapper.find('button').length).toEqual(2);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the onClick method to get Minimum number', () => {
    const action = wrapper.find('button.getmin').simulate('click');
    expect(action).toBeInstanceOf(Object);
  });

  it('should call the onClick method to get Maximum number', () => {
    const action = wrapper.find('button.getmax').simulate('click');
    expect(action).toBeInstanceOf(Object);
  });
});
