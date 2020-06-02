import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

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
  return <button onClick={bookRoom}> Book Room </button>;
}
