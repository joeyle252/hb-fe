const initialState = {
  destination: "",
  checkIn: new Date(),
  checkOut: new Date(),
  roomQuantity: 0,
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
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
