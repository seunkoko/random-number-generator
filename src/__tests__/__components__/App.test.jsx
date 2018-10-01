import React from 'react';

// third-party libraries
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BrowserRouter as Router } from 'react-router-dom';

// components
import App from '../../components/App';

// utils
import baseRouterProps from '../../utils/baseRouterProps';

describe('App', () => {
  const props = {
    ...baseRouterProps,
    homeActive: true,
    operationsActive: true,
  };

  it('renders without crashing', () => {
    const wrapper = mount(
      <Router>
        <App {...props} />
      </Router>
    );
    const rendering = toJson(wrapper);
    expect(rendering).toMatchSnapshot();
  });
});
