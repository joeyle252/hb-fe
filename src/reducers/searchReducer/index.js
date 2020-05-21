const initialState = {
  destination: "Ho Chi Minh city, Viet Nam",
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DESTINATION": {
      return {
        ...state,
        destination: action.payload.destination,
      };
    }
    default:
      return state;
  }
};

export default searchReducer;
