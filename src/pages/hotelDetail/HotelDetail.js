import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import HotelImageCarousel from "../../components/HotelImageCarousel/HotelImageCarousel";
import Navbar from "../../components/Navbar/Navbar";
import DetailSidebar from "../../components/DetailSidebar/DetailSidebar";
import HotelPriceTable from "../../components/HotelPriceTable/HotelPriceTable";
import { fetchHotelDetail } from "../../actions/detailAction";
import "./HotelDetail.css";

export default function HotelDetail() {
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchHotelDetail(id));
  }, []);
  return (
    <div className="detail-container bs-container">
      <div className="detail-navbar">
        <Navbar />
      </div>
      <div className="detail-sidebar">
        <DetailSidebar />
      </div>
      <div className="detail-content">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: "1" }}>
            <p> hotel name </p>
            <p> address</p>
          </div>
          <div style={{ flex: "1" }}>
            <p> Star rating </p>
            <p>Price</p>
          </div>
        </div>
        <HotelImageCarousel />
        <HotelPriceTable />
      </div>
    </div>
  );
}
