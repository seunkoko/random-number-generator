// react library
import React, { Component } from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// components
import Pagination from '../Pagination';

// styles
import './Table.css';

// utils
import baseRouterProps from '../../utils/baseRouterProps';

/**
 * Renders Table component
 *
 * @param {object} props - component's own props
 * @returns {JSX} JSX
 */
class Table extends Component {
  /**
   * getItems - function for paginating generated numbers
   *
   * @param {array} generatedNumbers - array of generated numbers
   * @param {number} page - present page number
   * @param {number} perPage - number of items to be returned per page
   * @returns {object} paginated items
   */
  static getItems(generatedNumbers, page, perPage) {
    const offset = (page - 1) * perPage;

    const paginatedItems = generatedNumbers.slice(offset).slice(0, perPage);
    const totalPages = Math.ceil(generatedNumbers.length / perPage);
    const items = {
      page,
      perPage,
      totalPages,
      prePage: page - 1 ? page - 1 : null,
      next_page: (totalPages > page) ? page + 1 : null,
      total: generatedNumbers.length,
      data: paginatedItems,
    };
    return items;
  }

  state = {
    paginatedItems: {},
    generatedNumbers: [],
    totalPages: 0,
    currentPage: 1,
  }

  /**
   * React component life cycle hook
   *
   * @memberof Table
   * @param {object} props - Props
   * @param {object} state - State
   * @return {object} - state
   * @return {void} - no return
   */
  static getDerivedStateFromProps(props, state) {
    const {
      generatedNumbers,
      numberUpdated,
    } = props;
    const { currentPage } = state;

    if (numberUpdated) {
      const paginatedItems = Table.getItems(generatedNumbers, currentPage, 20);
      const { totalPages } = paginatedItems;
      return {
        paginatedItems,
        totalPages,
        generatedNumbers,
        currentPage,
      };
    }

    return null;
  }

  /**
   * React component life cycle hook
   *
   * @memberof Table
   * @return {void} - returns void
   */
  componentDidMount() {
    const { generatedNumbers } = this.props;
    const { currentPage } = this.state;
    const paginatedItems = Table.getItems(generatedNumbers, currentPage, 20);
    const { totalPages } = paginatedItems;
    this.setState({
      paginatedItems,
      totalPages,
      generatedNumbers,
      currentPage,
    });
  }

  /**
   * handlePageClick - handles the change in page
   *
   * @param {object} data - data containing the selected page
   * @returns {void}
   */
  handlePageClick = (data) => {
    const { selected } = data;
    const { generatedNumbers } = this.state;
    const currentPage = Math.ceil(selected) + 1;
    const paginatedItems = Table.getItems(generatedNumbers, currentPage, 20);
    const { totalPages } = paginatedItems;
    this.setState({
      paginatedItems,
      totalPages,
      generatedNumbers,
      currentPage,
    });
  };

  render = () => {
    const {
      paginatedItems,
      totalPages,
    } = this.state;

    return (
      <div>
        <div className="table__container container">
          <table className="table table-striped no-move">
            <thead className="fixed_header">
              <tr>
                <th>#</th>
                <th className="text-center">Unique Identifier</th>
                <th className="text-center">Generated Number</th>
              </tr>
            </thead>
            <tbody className="scroll_body">
              {
                (
                  paginatedItems.data && paginatedItems.data.length > 0) &&
                  paginatedItems.data.map((paginatedItem, index) => (
                    <tr
                      key={`tableRow${index}`} // eslint-disable-line react/no-array-index-key
                    >
                      <td>{index + 1}</td>
                      <td>{paginatedItem.id}</td>
                      <td>{paginatedItem.value}</td>
                    </tr>
                  ))
              }
              {
                (paginatedItems.data && paginatedItems.data.length < 1) &&
                  (
                    <tr>
                      <td colSpan="3">No numbers found</td>
                    </tr>
                  )
              }
            </tbody>
          </table>
        </div>
        <Pagination
          id="paginateId"
          totalPages={totalPages}
          handlePageClick={this.handlePageClick}
        />
      </div>
    );
  }
}

Table.propTypes = {
  ...baseRouterProps,
  generatedNumbers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  numberUpdated: PropTypes.bool.isRequired,
};

export default Table;
