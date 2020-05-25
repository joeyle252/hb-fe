import React from "react";
import HotelImageCarousel from "../../components/HotelImageCarousel/HotelImageCarousel";

import Navbar from "../../components/Navbar/Navbar";
import "./HotelDetail.css";

export default function HotelDetail() {
  return (
    <div className="detail-container bs-container">
      <div className="detail-navbar">
        <Navbar />
      </div>
      <div className="detail-sidebar">sidebar</div>
      <div className="detail-content">
        <p> hotel name </p>
        <p> address</p>
        <p> Star rating </p>
        <HotelImageCarousel />
      </div>
    </div>
  );
}
