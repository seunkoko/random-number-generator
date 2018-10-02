// react library
import React, { Component } from 'react';

// third-party libraries
import _ from 'lodash';

// components
import Header from '../Common/Header';

// styles
import './Operations.css';

// utils
import { dummyGeneratedNumbers } from '../../utils/fixtures';

/**
 * @className Operations
 * @extends {Component}
 *
 * @param {string} type - min or max
 * @returns {JSX} JSX
 */
class Operations extends Component {
  state = { displayNumber: null };

  getNumber = (type) => {
    let { displayNumber } = this.state;
    const generatedNumbers = dummyGeneratedNumbers;
    if (type === 'min') {
      displayNumber = _.minBy(generatedNumbers, 'value');
    }
    if (type === 'max') {
      displayNumber = _.maxBy(generatedNumbers, 'value');
    }
    displayNumber = displayNumber.value;
    this.setState({ displayNumber });
  }

  render = () => {
    const { displayNumber } = this.state;

    return (
      <div>
        <Header homeActive={false} operationsActive />

        <div className="container operations__container">
          <div className="row description">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Get Minimum Value</h5>
                  <p
                    className="card-text"
                  >
                    Get minimum value from the generated phone numbers.
                  </p>
                  <button
                    className="btn btn__operation getmin"
                    type="button"
                    onClick={() => this.getNumber('min')} // eslint-disable-line react/jsx-no-bind
                  >
                    GET MIN
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Get Maximum Value</h5>
                  <p
                    className="card-text"
                  >
                    Get maximum value from the generated phone numbers.
                  </p>
                  <button
                    className="btn btn__operation getmax"
                    type="button"
                    onClick={() => this.getNumber('max')} // eslint-disable-line react/jsx-no-bind
                  >
                    GET MAX
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="jumbotron jumbotron__container">
            <div
              contentEditable={false}
              data-text={displayNumber || '...displays phone number'}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Operations;
