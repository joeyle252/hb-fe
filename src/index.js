import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HotelListPage from "./pages/HotelListPage/HotelListPage";
import SignUpPage from "./pages/signuppage/SignUpPage";
import SignInPage from "./pages/signinpage/SignInPage";

import { Server } from "miragejs";
new Server({
  routes() {
    this.namespace = "api"

    this.get("/hotels", () => {
      return {
        hotels: [
          { id: 1, name: "Hilton Ho Chi Minh", address: "Ho CHi Minh city", starRating: 4 },
          { id: 2, name: "Hilton Ha Noi", address: "Ha Noi capital", starRating: 2 },
          { id: 3, name: "Hilton Melbourne", address: "Melbourne", starRating: 1 },
        ],
      }
    }, { timing: 3000 })
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
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/signin">
          <SignInPage />
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
