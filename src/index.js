import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HotelListPage from "./pages/HotelListPage/HotelListPage";
import SignUpPage from "./pages/signuppage/SignUpPage";
import SignInPage from "./pages/signinpage/SignInPage";
import HotelDetail from "./pages/hotelDetail/HotelDetail.js";
import BookRoom from "./pages/BookRoom/BookRoom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/signin">
            <SignInPage />
          </Route>
          <Route path="/hotel/:id">
            <HotelDetail />
          </Route>
          <Route path="/bookroom">
            <BookRoom />
          </Route>
          <Route path="/">
            <HotelListPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
