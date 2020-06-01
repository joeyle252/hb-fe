import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import hotelsReducer from "./hotelsReducer";
import filtersReducer from "./filtersReducer";
import detailReducer from "./detailReducer";
import userReducer from "./userReducer";
import paginationReducer from "./paginationReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  filters: filtersReducer,
  hotels: hotelsReducer,
  detail: detailReducer,
  user: userReducer,
  pagination: paginationReducer,

  //other reducers
});

export default rootReducer;
