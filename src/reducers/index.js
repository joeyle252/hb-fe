import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import hotelsReducer from "./hotelsReducer"

const rootReducer = combineReducers({
  search: searchReducer,
  hotels: hotelsReducer,

  //other reducer
});

export default rootReducer;
