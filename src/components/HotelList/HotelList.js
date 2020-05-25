import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotels } from "../../actions/hotelsActions";
import "./hotelList.css";

export default function HotelList() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.hotels.loading);
  const hotels = useSelector((state) => state.hotels.hotels);

  //const [hotels, setHotels] = useState([]);
  //const [loading, setLoading] = useState(false);

  let history = useHistory();

  // const fetchHotels = async () => {
  //   setLoading(true);
  //   const result = await fetch("/api/hotels");
  //   const data = await result.json(); // {hotels: []}
  //   setHotels(data.hotels);
  //   setLoading(false);
  // };
  useEffect(() => {
    dispatch(fetchHotels);
  }, []);
  if (loading) {
    return <div> loading ...</div>;
  }

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ul>
        {hotels.map((hotel) => {
          return (
            <Card key={hotel.id} style={{ width: "100%", display: "flex", flexDirection: "row" }}>
              <Card.Img
                variant="top"
                style={{
                  height: "250px",
                  width: "300px",
                  justifyItems: "center",
                }}
                src="https://q-cf.bstatic.com/images/hotel/max1024x768/211/211332081.jpg"
              />
              <Card.Body>
                <Card.Title>{hotel.name}</Card.Title>
                <Card.Text> Address: {hotel.address}</Card.Text>
                <Card.Text> Star Rating: {hotel.starRating}</Card.Text>
                <Card.Text> {hotel.description}</Card.Text>
                <Button variant="primary" onClick={() => history.push(`/hotel/${hotel.id}`)}>
                  More detail
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </ul>
    </div>
  );
}
