import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HotelListPage from "./pages/HotelListPage/HotelListPage";

import { Server } from "miragejs";
new Server({
  routes() {
    this.namespace = "api"

    this.get("/hotels", () => {
      return {
        hotels: [
          { id: 1, name: "Hilton Ho Chi Minh", starRating: 4 },
          { id: 2, name: "Hilton Sydney", starRating: 2 },
          { id: 3, name: "Hilton Melbourne", starRating: 1 },
        ],
      }
    }, {timing: 4000})
  },
})

// fetch("/api/hotels")
// .then((result)=>{
//   console.log("result", result);
// })
// .catch((err)=>{
//   console.log("err",err)
// })

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <HotelListPage />
        </Route>
     
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
