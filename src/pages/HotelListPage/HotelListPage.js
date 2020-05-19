import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import Filters from "../../components/Filters/Filters";
import HotelList from "../../components/HotelList/HotelList";


export default function HotelListPage() {
  
  return (
    <>
      <Navbar />
      <Search />
      <Filters />
      <HotelList />
    </>
  );
}
