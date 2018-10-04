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
  const mockData = [
    {
      id: 1,
      value: '0987654321',
    },
    {
      id: 2,
      value: '0123456789',
    },
  ];

  beforeEach(() => {
    mock({ 'src/data.txt': JSON.stringify(mockData) });
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

  it('should call the setNumber method for minimum type', () => {
    const setNumberSpy = spy(wrapper.instance(), 'setNumber');
    wrapper.instance().setNumber('min', mockData);
    expect(setNumberSpy.called).toEqual(true);
    expect(wrapper.state().displayNumber).toEqual('0123456789');
  });

  it('should call the setNumber method for maximum type', () => {
    const setNumberSpy = spy(wrapper.instance(), 'setNumber');
    wrapper.instance().setNumber('max', mockData);
    expect(setNumberSpy.called).toEqual(true);
    expect(wrapper.state().displayNumber).toEqual('0987654321');
  });

  it('should call the getNumber method', () => {
    const getNumberSpy = spy(wrapper.instance(), 'getNumber');
    wrapper.instance().getNumber('min');
    expect(getNumberSpy.called).toEqual(true);
  });
});
