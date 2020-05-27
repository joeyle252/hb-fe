import React from "react";
import {useHistory} from "react-router-dom";



export default function BookReservationButton() {
    let history = useHistory();

    const bookRoom = () => {
        history.push("/bookroom");
      };
  return <button onClick={bookRoom}> Book Room </button>;
}
