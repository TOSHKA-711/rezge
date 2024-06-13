import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../contextApi/MyProvider";
import FilterCard from "./items/FilterCard";
import Pagination from "./items/Pagination";
import { FaRegSadCry } from "react-icons/fa";
import "./style/FilterResults.css";

const FilterResults = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const { filterResponse } = useContext(MyContext);

  // Ensure filterResponse is an array
  const responseArray = Array.isArray(filterResponse)
    ? filterResponse
    : [filterResponse];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = responseArray.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  console.log("filter respone", responseArray);
  return (
    <div className="filter-results">
      <div className="container">
        <div className="title">نتائج البحث</div>
        <div className="cards">
          {responseArray.length === 0 ? (
            <div className="error-text">
              <h1>
                <FaRegSadCry /> لا يوجد نتائج بحث{" "}
              </h1>
              <Link to="/" className="btn-to-home">
                تغيير معايير البحث
              </Link>
            </div>
          ) : (
            currentItems.map((item) => (
                <FilterCard
                key={item.id} 
                item={item} 
                name={item.name}
                type={item.type}
                age={item.age}
                status={item.status}
                accommodation={item.accommodation}
              />
            ))
          )}
        </div>
        {responseArray.length > 0 && (
          <Pagination
            className="pagination"
            totalItems={responseArray.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default FilterResults;


