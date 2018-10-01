// react library
import React from 'react';

// third-party libraries
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// components
import Pagination from '../../components/Pagination';

describe('Pagination', () => {
  let props = {
    totalPages: 0,
    handlePageClick: jest.fn(),
  };

  it('renders properly when props are supplied', () => {
    const wrapper = shallow(<Pagination {...props} />);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('renders properly when totalPages is greater than 0', () => {
    props = {
      ...props,
      totalPages: 100,
    };
    const wrapper = shallow(<Pagination {...props} />);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('renders properly when totalPages is less than 10', () => {
    props = {
      ...props,
      totalPages: 2,
    };
    const wrapper = shallow(<Pagination {...props} />);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
