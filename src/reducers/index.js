import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import hotelsReducer from "./hotelsReducer";
import filtersReducer from "./filtersReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  filters: filtersReducer,
  hotels: hotelsReducer,

  //other reducers
});

export default rootReducer;
