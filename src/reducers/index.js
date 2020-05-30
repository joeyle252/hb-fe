import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import hotelsReducer from "./hotelsReducer";
import filtersReducer from "./filtersReducer";
import detailReducer from "./detailReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  filters: filtersReducer,
  hotels: hotelsReducer,
  detail: detailReducer,
  user: userReducer,

  //other reducers
});

export default rootReducer;
