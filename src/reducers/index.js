import { combineReducers } from "redux";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  //other reducer
});

export default rootReducer;
