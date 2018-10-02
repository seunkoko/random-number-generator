// react library
import React, { Fragment } from 'react';

// third-party libraries
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

// components
import Footer from '../components/Common/Footer';
import App from '../components/App';
import Operations from '../components/Operations';
import NotFound from '../components/NotFound';

/**
 * Renders Routes layout and component
 *
 * @returns {JSX} JSX
 */
const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/operations" component={Operations} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
