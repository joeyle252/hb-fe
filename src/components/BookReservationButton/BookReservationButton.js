import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./BookReservationButton.css";

export default function BookReservationButton() {
  let history = useHistory();
  let token = useSelector((state) => state.user.user && state.user.user.token);

  const bookRoom = () => {
    if (token) {
      history.push("/bookroom");
    } else {
      history.push("/signin");
    }
  };
  return (
    <button onClick={bookRoom} className="bookRoomButton" style={{ display: "flex", justifyContent: "center" }}>
      Book Room
    </button>
  );
}
