// react library
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

// styles
import './Pagination.css';

// utils
import baseRouterProps from '../../utils/baseRouterProps';

const paginateNav = (totalPages, handlePageClick) => (
  <ReactPaginate
    id="reactPaginateId"
    previousLabel="<"
    nextLabel=">"
    breakLabel={<a href="">...</a>} // eslint-disable-line jsx-a11y/anchor-is-valid
    breakClassName="break-me"
    pageCount={totalPages} // eslint-disable-line no-unneeded-ternary
    marginPagesDisplayed={3}
    pageRangeDisplayed={totalPages > 9 ? 10 : totalPages}
    onPageChange={handlePageClick}
    containerClassName="pagination justify-content-center"
    pageClassName="page-item"
    pageLinkClassName="page-link"
    nextClassName="page-item next-button"
    previousClassName="page-item"
    previousLinkClassName="page-link"
    nextLinkClassName="page-link"
    disabledClassName="disabled"
    activeClassName="active"
  />
);

/**
 * Renders Pagination component
 *
 * @param {object} props - component's own props
 * @returns {JSX} JSX
 */
const Pagination = (props) => {
  const {
    totalPages,
    handlePageClick,
  } = props;

  return (
    <nav className="container pagination__container">
      {totalPages > 1 ? paginateNav(totalPages, handlePageClick) : null}
    </nav>
  );
};

Pagination.propTypes = {
  ...baseRouterProps,
  totalPages: PropTypes.number.isRequired,
  handlePageClick: PropTypes.func.isRequired,
};

export default Pagination;
