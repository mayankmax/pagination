import React, { useState } from "react";
import { data } from "./source.js";
import Pagination from "../Components/pagination.jsx";

const Index = () => {
  const [paginationState, setPaginationState] = useState({
    start: 0,
    end: 5,
    displayNumber: 5, // Default display number
  });

  const handlePaginationChange = (newPaginationState) => {
    setPaginationState(newPaginationState);
  };

  const { start, end } = paginationState;

  console.log("start", start, " ", "end", end);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {/* Display data based on pagination state */}
          {start >= data.length && end >= data.length ? (
            <tr>
              <td colSpan="6">
                No data to display, You exceeded the Data Length
              </td>
            </tr>
          ) : (
            data.slice(start, end).map((res, index) => (
              <tr key={index}>
                <td>{start + index}</td>
                <td>{res.Name}</td>
                <td>{res.Email}</td>
                <td>{res.Phone}</td>
                <td>{res.Age}</td>
                <td>{res.Occupation}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <Pagination
        totalData={data.length}
        paginationState={paginationState}
        onChange={handlePaginationChange}
      />
    </>
  );
};

export default Index;
