const initialState = {
  loading: false,
  hotels: [],
};

const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_HOTELS_LOADING": {
      return {
        ...state,
        loading: action.payload.loading,
      };
    }
    case "SET_HOTELS_LIST": {
      return {
        ...state,
        hotels: action.payload.hotels,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default hotelsReducer;
