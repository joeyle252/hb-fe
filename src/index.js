import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HotelListPage from "./pages/HotelListPage/HotelListPage";
import SignUpPage from "./pages/signuppage/SignUpPage";
import SignInPage from "./pages/signinpage/SignInPage";
import HotelDetail from "./pages/hotelDetail/HotelDetail";

import { Server } from "miragejs";
new Server({
  routes() {
    this.namespace = "api"

    this.get("/hotels", () => {
      //name, address, star rating, photo, description, prices, available rooms

      const hotels = new Array(10).fill(null).map((val, idx) => {
        return {
          id: idx,
          name: "Senses Legend Hotel (Formerly Icon 36 Hotel)",
          address: "33 Bui Thi Xuan, District 1, Ho Chi Minh City, Vietnam",
          starRating: 3,
          userRating: 2,
          description: "Centrally located in Ho Chi Minh City, Icon 36 Hotel offers elegant and comfortable accommodations within 200 m from Tao Dan Park. It operates a 24-hour front desk and provides free WiFi access in the entire property.",
          availableRooms: [
            { type: "standard", quantity: 3, price: 5000 },
            { type: "deluxe", quantity: 3, price: 100000 },
          ],
          photos: [
            "https://q-cf.bstatic.com/images/hotel/max1024x768/761/76155687.jpg",
            "https://r-cf.bstatic.com/images/hotel/max1024x768/757/75726481.jpg",
          ]
        };
      })
      return {
        hotels: hotels
      };
    },
      { timing: 3000 }
    )
  }
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/signin">
          <SignInPage />
        </Route>
        <Route path="/hotel">
          <HotelDetail />
          </Route>
        <Route path="/">
          <HotelListPage />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
