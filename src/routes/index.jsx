// react library
import React, { Fragment } from 'react';

// third-party libraries
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

// components
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import App from '../components/App';
import NotFound from '../components/NotFound';
import Table from '../components/Table';

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
        <Route exact path="/" component={Table} />
        <Route exact path="/operations" component={App} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
