// react library
import React from 'react';

// third-party libraries
import { Button } from 'react-bootstrap';

// styles
import './NotFound.css';

// assets
import ChevronRight from '../../assets/images/chevron-right.svg';

/**
 * Renders NotFound component
 *
 * @param {object} props - component's own props
 * @returns {JSX} JSX
 */
const NotFound = props => (
  <div className="not-found-container">
    <h1 className="not-found-heading">404</h1>
    <p className="not-found-text">You weren&apos;t supposed to find this place.</p>

    <Button
      bsStyle="warning"
      className="__button"
      name="GO BACK HOME"
      icon={ChevronRight}
      onClick={() => props.history.push('/')} // eslint-disable-line
    >
      Go Back Home
    </Button>
  </div>
);

export default NotFound;
