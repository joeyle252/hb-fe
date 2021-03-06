const initialState = {
  destination: "",
  checkIn: new Date().toISOString(),
  checkOut: new Date().toISOString(),
  roomQuantity: 1,
  errors: {},
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_ERRORS": {
      return {
        ...state,
        errors: action.payload.errors,
      };
    }
    case "SET_DESTINATION": {
      return {
        ...state,
        destination: action.payload.destination,
      };
    }
    case "SET_CHECKIN": {
      return {
        ...state,
        checkIn: action.payload.checkIn,
      };
    }
    case "SET_CHECKOUT": {
      return {
        ...state,
        checkOut: action.payload.checkOut,
      };
    }
    case "SET_ROOM_QUANTITY": {
      return {
        ...state,
        roomQuantity: action.payload.roomQuantity,
      };
    }
    default:
      return state;
  }
};

export default searchReducer;
