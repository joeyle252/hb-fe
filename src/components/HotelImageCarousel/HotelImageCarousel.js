import React from "react";
import { useSelector } from "react-redux";
import { Carousel } from "react-bootstrap";

export default function HotelImageCarousel() {
  const hotel = useSelector((state) => state.detail.hotel);
  return (
    <Carousel style={{ height: "600px", width: "100%" }}>
      {hotel.photos.map((photoUrl, idx) => {
        return (
          <Carousel.Item key={idx}>
            <img className="d-block w-100" src={photoUrl} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
