// react library
import React, { Fragment } from 'react';

// third-party libraries
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

// components
import Header from '../components/Common/Header';
import App from '../components/App';
import NotFound from '../components/NotFound';

/**
 * Renders Routes layout and component
 *
 * @returns {JSX} JSX
 */
const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Header homeActive operationsActive={false} />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/operations" component={App} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
