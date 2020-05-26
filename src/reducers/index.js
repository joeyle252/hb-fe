import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import hotelsReducer from "./hotelsReducer";
import filtersReducer from "./filtersReducer";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  filters: filtersReducer,
  hotels: hotelsReducer,
  detail: detailReducer,

  //other reducers
});

export default rootReducer;
