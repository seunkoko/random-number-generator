// react library
import React from 'react';

// third-party libraries
import { mount } from 'enzyme';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

// components
import Routes from '../../routes';
import App from '../../components/App';
import NotFound from '../../components/NotFound';

// utils
import baseRouterProps from '../../utils/baseRouterProps';

describe('Routes', () => {
  let props = {
    ...baseRouterProps,
    homeActive: true,
    operationsActive: true,
  };

  it('renders correctly', () => {
    expect(
      mount(
        <BrowserRouter>
          <Routes {...props} />
        </BrowserRouter>
      ).exists()
    ).toBe(true);
  });

  it('redirects to the Landing Page when path is `/`', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(App)).toHaveLength(1);
  });

  it('redirects to the Not found page when a path is not found', () => {
    props = { history: { push: jest.fn() } };
    const wrapper = mount(
      <MemoryRouter initialEntries={['/not_found']}>
        <NotFound {...props} />
      </MemoryRouter>
    );
    expect(wrapper.find(NotFound)).toHaveLength(1);
  });

  it('redirects to the Operations page when the path /operations hit', () => {
    props = { location: { pathname: 'base_url/operations' } };
    const wrapper = mount(
      <MemoryRouter initialEntries={['/operations']}>
        <App {...props} />
      </MemoryRouter>
    );
    expect(wrapper.find(App)).toHaveLength(1);
  });
});
