import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HotelImageCarousel from "../../components/HotelImageCarousel/HotelImageCarousel";
import Navbar from "../../components/Navbar/Navbar";
import DetailSidebar from "../../components/DetailSidebar/DetailSidebar";
import HotelPriceTable from "../../components/HotelPriceTable/HotelPriceTable";
import { fetchHotelDetail } from "../../actions/detailAction";
import BookReservationButton from "../../components/BookReservationButton/BookReservationButton";
import "./HotelDetail.css";

export default function HotelDetail() {
  const hotel = useSelector((state) => state.detail.hotel);
  const loading = useSelector((state) => state.detail.loading);

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
      <div className="detail-sidebar">{loading ? "loading..." : hotel && <DetailSidebar />}</div>
      <div className="detail-content">
        {loading
          ? "loading ..."
          : hotel && (
              <>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ flex: "1" }}>
                    <p> hotel name: {hotel.name} </p>
                    <p> address: {hotel.address}</p>
                  </div>
                  <div style={{ flex: "1" }}>
                    <p> Star rating: {hotel.starRating} </p>
                    <p>Price: {hotel.availableRooms[0].price}</p>
                  </div>
                </div>
                <HotelImageCarousel />
                <HotelPriceTable />
                <BookReservationButton />
              </>
            )}
      </div>
    </div>
  );
}
