import React from "react";

import "./Pagination.css";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (page) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={i === currentPage ? "active" : ""}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button onClick={() => handleClick(currentPage - 1)}><GrPrevious /></button>
      )}
      {renderPageNumbers()}
      {currentPage < totalPages && (
        <button onClick={() => handleClick(currentPage + 1)}><GrNext /></button>
      )}
    </div>
  );
};

export default Pagination;
