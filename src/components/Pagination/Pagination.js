import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "react-js-pagination";
import {fetchHotels} from "../../actions/hotelsActions";

export default function PaginationOutLined() {
  const page = useSelector((state) => state.pagination.page);
  const dispatch = useDispatch();
  let handlePageChange = async (page) => {
    const pageAction = {
      type: "SET_PAGE",
      payload: { page: page },
    };
    dispatch(pageAction);
    dispatch(fetchHotels);
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
      />
    </div>
  );
}
