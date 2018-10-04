// react library
import React, { Component } from 'react';

// third-party libraries
import _ from 'lodash';
import toastr from 'toastr';
import * as fs from 'fs';

// components
import Header from '../Common/Header';
import Table from '../Table';

// styles
import './App.css';

/**
 * @class App
 * @extends {Component}
 *
 * @param {Event} event - Synthetic Events
 * @param {string} sort - value to sort by
 * @returns {JSX} JSX
 */
class App extends Component {
  state = {
    generatedNumbers: [],
    numberUpdated: false,
    numberToGenerate: 0, // eslint-disable-line react/no-unused-state
  };

  /**
   * React component life cycle hook
   *
   * @memberof App
   * @return {void} - returns void
   */
  componentWillMount() {
    fs.readFile('../../data.txt', 'utf-8', (err, data) => !err ? this.setComponentState(JSON.parse(data) || []) : null); // eslint-disable-line
  }

  setComponentState = (generatedNumbers) => {
    this.setState({
      generatedNumbers,
      numberUpdated: true,
    });
  }

  generatePhoneNumbers = (generatedNumbers = []) => {
    let { numberToGenerate } = this.state;
    const numberLength = 9;
    numberToGenerate = numberToGenerate > 0 ? numberToGenerate : 5000;

    for (let i = 0; i < numberToGenerate; i++) { // eslint-disable-line no-plusplus
      const number = `0${Math.floor(Math.pow(10, numberLength-1) + Math.random() * 9 * Math.pow(10, numberLength-1))}`; // eslint-disable-line
      if (_.findIndex(generatedNumbers, { value: number }) === -1) {
        generatedNumbers.push({
          id: i + 1,
          value: number,
        });
      } else i--; // eslint-disable-line no-plusplus
    }
    return generatedNumbers;
  }

  onSubmit = (event) => {
    event.preventDefault();
    const generatedNumbers = this.generatePhoneNumbers();
    const dataToWrite = JSON.stringify(generatedNumbers);
    fs.writeFile('../../data.txt', dataToWrite, (err, data) => err ? toastr.error('Something went wrong! Unable to generate numbers') : this.setComponentState(generatedNumbers)); // eslint-disable-line
  }

  onChange = (event) => {
    event.preventDefault();
    const {
      name,
      value,
    } = event.target;

    if (name === 'numberToGenerate') {
      this.setState({ numberToGenerate: value }); // eslint-disable-line react/no-unused-state
    }
  }

  onSort = (sort) => {
    const numberUpdated = true;
    let { generatedNumbers } = this.state;
    if (sort === 'highest') {
      generatedNumbers = _.orderBy(generatedNumbers, ['value'], ['desc']);
    }
    if (sort === 'lowest') {
      generatedNumbers = _.orderBy(generatedNumbers, ['value'], ['asc']);
    }
    if (sort === 'id') {
      generatedNumbers = _.sortBy(generatedNumbers, ['id']);
    }
    this.setState({
      generatedNumbers,
      numberUpdated,
    });
  }

  render = () => {
    const {
      generatedNumbers,
      numberUpdated,
    } = this.state;

    return (
      <div>
        <Header homeActive operationsActive={false} />
        <div className="container">
          <div className="container home__container">
            <form onSubmit={this.onSubmit}>
              <div className="row">
                <div className="col-sm-4 text-left">
                  <input
                    id="numberInput"
                    className="number"
                    placeholder="&le; 5000"
                    type="number"
                    name="numberToGenerate"
                    max="5000"
                    min="1"
                    onChange={this.onChange}
                  />
                </div>
                <div className="col-sm-4 text-left">
                  <div className="dropdown">
                    <button
                      className="btn btn-default dropdown-toggle btn__dropdown"
                      type="button"
                      id="menu1"
                      data-toggle="dropdown"
                    >
                      SORT BY
                      <span className="caret" />
                    </button>
                    <ul
                      className="dropdown-menu dropdown__container"
                      role="menu"
                      aria-labelledby="menu1"
                    >
                      <li role="presentation">
                        <a // eslint-disable-line
                          className="lowestSort"
                          role="menuitem"
                          tabIndex="-1"
                          href="#"
                          onClick={() => this.onSort('lowest')} // eslint-disable-line
                        >
                          Lowest Values
                        </a>
                      </li>
                      <li role="presentation">
                        <a // eslint-disable-line
                          className="highestSort"
                          role="menuitem"
                          tabIndex="-1"
                          href="#"
                          onClick={() => this.onSort('highest')} // eslint-disable-line
                        >
                          Highest Values
                        </a>
                      </li>
                      <li role="presentation">
                        <a // eslint-disable-line
                          className="uniqueSort"
                          role="menuitem"
                          tabIndex="-1"
                          href="#"
                          onClick={() => this.onSort('id')} // eslint-disable-line
                        >
                          Unique Identifier
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-4 text-right">
                  <button
                    className="btn btn__generate"
                    type="submit"
                  >
                    GENERATE
                  </button>
                </div>
              </div>
            </form>
          </div>
          <Table
            generatedNumbers={generatedNumbers}
            numberUpdated={numberUpdated}
          />
        </div>
      </div>
    );
  }
}

export default App;
