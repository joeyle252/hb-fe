const initialState = {
  starRating: [2, 3, 4, 5],
  priceMaximum: 100,
};
const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STAR_RATING": {
      return {
        ...state,
        starRating: action.payload.checked
          ? [...state.starRating, action.payload.ratingType]
          : state.starRating.filter((star) => star !== action.payload.ratingType),
      };
    }
    default:
      return state;
  }
};

export default filtersReducer;
