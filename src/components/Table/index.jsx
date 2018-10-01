// react library
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';
import { Table as BootstrapTable } from 'react-bootstrap';

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
const Table = (props) => {
  const { generatedNumbers } = props;

  return (
    <div className="container table__container">
      <BootstrapTable striped bordered condensed hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th className="text-center">Unique Identifier</th>
            <th className="text-center">Generated Number</th>
          </tr>
        </thead>
        {
          (generatedNumbers && generatedNumbers.length > 0) &&
            generatedNumbers.map((generatedNumber, index) => (
              <tbody
                key={`tableRow${index}`} // eslint-disable-line react/no-array-index-key
              >
                <tr>
                  <td>{index + 1}</td>
                  <td>{generatedNumber.id}</td>
                  <td>{generatedNumber.value}</td>
                </tr>
              </tbody>
            ))
        }
        {
          (generatedNumbers && generatedNumbers.length < 1) &&
            (
              <tbody>
                <tr>
                  <td colSpan="3">No numbers found</td>
                </tr>
              </tbody>
            )
        }
      </BootstrapTable>
    </div>
  );
};

Table.propTypes = {
  ...baseRouterProps,
  generatedNumbers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
};

Table.defaultProps = { generatedNumbers: [] };

export default Table;
