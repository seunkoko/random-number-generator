/* eslint-disable */
// react library
import React from 'react';

// third-party libraries
import ReactDOM from 'react-dom';

// styles
import './index.css';

// components
import Routes from '../src/routes';

// service worker
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
