import React, { useEffect, useState } from "react";

export default function HotelList() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHotels = async () => {
    setLoading(true);
    const result = await fetch("/api/hotels");
    const data = await result.json(); // {hotels: []}
    setHotels(data.hotels);
    setLoading(false);
  };
  useEffect(() => {
    fetchHotels();
  }, []);
  if (loading) {
    return <div> loading ...</div>;
  }

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ul>
        {hotels.map((hotel) => {
          return (
            <li key={hotel.id}>
              <p> title: {hotel.name}</p>
              <p>address: {hotel.address}</p>
              <p> start rating: {hotel.starRating} </p>
              <img src={hotel.photos[0]} style={{ height: "50px", width: "50px" }} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
