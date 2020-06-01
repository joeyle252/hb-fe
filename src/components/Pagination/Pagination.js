import React, { useState } from "react";
import Pagination from "react-js-pagination";

export default function PaginationOutLined() {
  let [page, setPage] = useState(1);
  let [hotelList, setHotelList] = useState([]);
  let handlePageChange = async (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setPage(pageNumber);
    let url = `${process.env.REACT_APP_BASE_API_URL}/hotels`;
    let data = await fetch(url);
    console.log("data", data);
    let dataResults = await data.json();
    console.log("data", dataResults);

    setHotelList(dataResults.hotels);
  };
  return (
    <div className="pagination">
      <Pagination
        activePage={page}
        itemsCountPerPage={8}
        totalItemsCount={32}
        pageRangeDisplayed={4}
        onChange={handlePageChange}
        itemClass="page-item"
        linkClass="page-link"
        value={hotelList}
      />
    </div>
  );
}
