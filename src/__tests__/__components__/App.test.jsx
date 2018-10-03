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

const mock = require('mock-fs');

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
    mock({ 'src/data.txt': {} });
    wrapper = mount(<App {...props} />);
  });

  afterAll(() => {
    mock.restore();
    wrapper.unmount();
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

  it('should call the onSubmit method', () => {
    const onSubmitSpy = spy(wrapper.instance(), 'onSubmit');
    wrapper.instance().onChange(event);
    wrapper.find('.btn__generate').first().simulate('submit', event);
    expect(onSubmitSpy.called).toEqual(false);
  });

  it('should call the generatePhoneNumbers method', () => {
    const generatePhoneNumbersSpy = spy(wrapper.instance(), 'generatePhoneNumbers');
    wrapper.instance().generatePhoneNumbers();
    expect(generatePhoneNumbersSpy.called).toEqual(true);
  });
});
