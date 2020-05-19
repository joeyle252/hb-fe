import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import Filters from "../../components/Filters/Filters";
import HotelList from "../../components/HotelList/HotelList";
import "./HotelListPage.css"


export default function HotelListPage() {

  return (
    <div className="container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="search">
        <Search />
      </div>
      <div className="filters">
        <Filters />
      </div>
      <div className="hotels-list">
        <HotelList />
      </div>
    </div>
  );
}
