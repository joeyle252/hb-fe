const initialState = {
  loading: false,
  hotel: null,
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DETAIL_LOADING": {
      return {
        ...state,
        loading: action.payload.loading,
      };
    }
    case "SET_DETAIL_HOTEL": {
      return {
        ...state,
        hotel: action.payload.hotel,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default detailReducer;
