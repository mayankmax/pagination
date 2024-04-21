import React from "react";
import "./pagination.css";

export default function Pagination({ totalData, paginationState, onChange }) {
  const { displayNumber } = paginationState;

  const handleInput = (e) => {
    const newDisplayNumber = parseInt(e.target.value, 10);
    onChange({ ...paginationState, displayNumber: newDisplayNumber });
  };

  const handlePageClick = (pageNumber) => {
    console.log("pageNumber", pageNumber);
    const newStart = (pageNumber - 1) * displayNumber;
    const newEnd = pageNumber * displayNumber;
    onChange({ ...paginationState, start: newStart, end: newEnd });
  };

  return (
    <div className="pagination-main">
      <p onClick={() => handlePageClick(1)}>1</p>
      <p onClick={() => handlePageClick(2)}>2</p>
      <p onClick={() => handlePageClick(3)}>3</p>
      <p onClick={() => handlePageClick(4)}>4</p>
      <p onClick={() => handlePageClick(5)}>5</p>
      ........
      {displayNumber > 0 && (
        <p
          onClick={() => handlePageClick(Math.ceil(totalData / displayNumber))}
        >
          {Math.ceil(totalData / displayNumber)}
        </p>
      )}
      <div className="pagination-page">
        {displayNumber > 0 ? (
          <p>
            <input type="text" onChange={handleInput} value={displayNumber} />
            /pages
          </p>
        ) : (
          <h6>Input number cannot be 0</h6>
        )}
      </div>
    </div>
  );
}
