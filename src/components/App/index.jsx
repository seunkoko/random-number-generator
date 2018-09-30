import React from 'react';
import logo from '../../assets/images/logo.svg';
import './App.css';

/**
 * App - Landing page
 *
 * @class App
 * @extends {Component}
 */
const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit
      <code>
        src/App.js
      </code>
      and save to reload.
    </p>
  </div>
);

export default App;
