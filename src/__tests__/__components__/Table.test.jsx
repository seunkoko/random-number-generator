// react library
import React from 'react';

// third-party libraries
import { mount } from 'enzyme';

// components
import Table from '../../components/Table';

describe('Table', () => {
  let props = { generatedNumbers: [] };

  it('renders properly', () => {
    const wrapper = mount(<Table {...props} />);

    expect(wrapper.find('div').length).toEqual(2);
    expect(wrapper.find('thead').length).toEqual(1);
    expect(wrapper.find('tr').length).toEqual(2);
    expect(wrapper.find('th').length).toEqual(3);
    expect(wrapper.find('td').length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders properly when props are supplied', () => {
    props = {
      generatedNumbers: [
        {
          id: 1,
          value: 8282828282,
        },
        {
          id: 2,
          value: 7373773734,
        },
      ],
    };

    const wrapper = mount(<Table {...props} />);

    expect(wrapper.find('div').length).toEqual(2);
    expect(wrapper.find('thead').length).toEqual(1);
    expect(wrapper.find('tr').length).toEqual(3);
    expect(wrapper.find('th').length).toEqual(3);
    expect(wrapper.find('td').length).toEqual(6);
    expect(wrapper).toMatchSnapshot();
  });
});
