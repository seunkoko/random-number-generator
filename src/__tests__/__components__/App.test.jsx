import React from 'react';

// third-party libraries
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { spy } from 'sinon';

// components
import App from '../../components/App';

// utils
import baseRouterProps from '../../utils/baseRouterProps';
import { dummyGeneratedNumbers } from '../../utils/fixtures';

let event = {
  target: {
    name: 'numberToGenerate',
    value: 4000,
    selectedOptions: [
      { innerHTML: 'selected name' },
    ],
  },
  preventDefault: spy(),
};

describe('App', () => {
  const props = {
    ...baseRouterProps,
    homeActive: true,
    operationsActive: true,
    generatedNumbers: dummyGeneratedNumbers,
  };
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App {...props} />);
  });

  it('renders without crashing', () => {
    const rendering = toJson(wrapper);
    expect(rendering).toMatchSnapshot();
  });

  it('should call the onClick method to sort by Highest', () => {
    const action = wrapper.find('a.highestSort').simulate('click');
    expect(action).toBeInstanceOf(Object);
  });

  it('should call the onClick method to sort by Lowest', () => {
    const action = wrapper.find('a.lowestSort').simulate('click');
    expect(action).toBeInstanceOf(Object);
  });

  it('should call the onClick method to sort by IDs', () => {
    const action = wrapper.find('a.uniqueSort').simulate('click');
    expect(action).toBeInstanceOf(Object);
  });

  it('should call the onChange method for input validation', () => {
    const onChangeSpy = spy(wrapper.instance(), 'onChange');
    wrapper.instance().onChange(event);
    wrapper.find('.number').first().simulate('change', event);
    expect(onChangeSpy.called).toEqual(true);
    expect(wrapper.state().numberToGenerate).toEqual(4000);
  });

  it('should call the onChange method', () => {
    event = {
      ...event,
      target: { name: 'dummy' },
    };
    const onChangeSpy = spy(wrapper.instance(), 'onChange');
    wrapper.instance().onChange(event);
    wrapper.find('.number').first().simulate('change', event);
    expect(onChangeSpy.called).toEqual(true);
    expect(wrapper.state().numberToGenerate).toEqual(0);
  });
});
