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
    <ul>
      {hotels.map((hotel) => {
        return (
          <li key={hotel.id}>
            <p> title: {hotel.name}</p>
            <p>address: {hotel.address}</p>
            <p> start rating: {hotel.starRating} </p>
          </li>
        );
      })}
    </ul>
  );
}
