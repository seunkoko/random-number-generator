// react library
import React from 'react';

// third-party libraries
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { spy } from 'sinon';

// components
import Table from '../../components/Table';

// utils
import { dummyGeneratedNumbers } from '../../utils/fixtures';

describe('Table', () => {
  const props = { generatedNumbers: dummyGeneratedNumbers };
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Table {...props} />);
  });

  it('renders properly when props are supplied', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call handlePageClick method', () => {
    const data = { selected: 1 };
    const handlePageClickSpy = spy(wrapper.instance(), 'handlePageClick');
    wrapper.instance().handlePageClick(data);
    expect(handlePageClickSpy.called).toEqual(true);
  });
});
