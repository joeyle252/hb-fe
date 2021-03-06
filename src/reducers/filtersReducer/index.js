const initialState = {
  starRating: [2, 3, 4, 5],
  priceMaximum: 5,
};
const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STAR_RATING": {
      return {
        ...state,
        starRating: action.payload.checked
          ? [...state.starRating, action.payload.ratingType] //true, (true again)
          : state.starRating.filter((star) => star !== action.payload.ratingType),// false
      };
    }
    case "SET_PRICE_MAXIMUM": {
      return {
        // decide what will return for price maximum action here
        ...state,
        // check if priceMaximum !== 100, remove 100, and put new priceMaximum
        priceMaximum: action.payload.priceMaximum,
      };
    }
    default:
      return state;
  }
};

export default filtersReducer;
