// react library
import React from 'react';

// third-party libraries
import { shallow } from 'enzyme';
import { spy } from 'sinon';

// components
import Operations from '../../components/Operations';

const mock = require('mock-fs');

describe('Operations', () => {
  let wrapper;

  beforeEach(() => {
    mock({ 'src/data.txt': {} });
    wrapper = shallow(<Operations />);
  });

  afterAll(() => {
    mock.restore();
  });

  it('renders properly', () => {
    expect(wrapper.find('div').length).toEqual(12);
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

  it('should call the getNumber method', () => {
    const getNumberSpy = spy(wrapper.instance(), 'getNumber');
    wrapper.instance().getNumber();
    expect(getNumberSpy.called).toEqual(true);
  });
});
