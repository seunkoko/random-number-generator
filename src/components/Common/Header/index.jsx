import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// styles
import './Header.css';

// logo
import logo from '../../../assets/images/rng-logo-black.png';

// utils
import baseRouterProps from '../../../utils/baseRouterProps';

/**
 * Header - Header component
 *
 * @class Header
 * @param {object} props - props
 */
const Header = (props) => {
  const {
    homeActive,
    operationsActive,
  } = props;

  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="container header__container">
          <div className="navbar-header">
            <img alt="" className="__logo" src={logo} />
            <a className="navbar-brand" href="/">Random Number Generator</a>
          </div>
          <ul className="nav navbar-nav">
            <li
              className={homeActive ? 'active' : ''}
            >
              <a id="homeTab" href="/">Home</a>
            </li>
            <li
              className={operationsActive ? 'active' : ''}
            >
              <a id="operationsTab" href="/operations">Operations</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  ...baseRouterProps,
  homeActive: PropTypes.bool.isRequired,
  operationsActive: PropTypes.bool.isRequired,
};

export default Header;
