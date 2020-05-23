export const validateSearchFields = (dispatch, getState) => {
  const state = getState();
  const errors = {};

  if (!state.search.destination) {
    errors.destination = "this field is required";
  }
  if (!state.search.checkIn) {
    errors.checkIn = "this field is required";
  }
  if (!state.search.checkOut) {
    errors.checkOut = "this field is required";
  }
  if (!state.search.roomQuantity) {
    errors.roomQuantity = "this field is required";
  }
  let validateAction = {
    type: "SET_SEARCH_ERRORS",
    payload: { errors: errors },
  };
  dispatch(validateAction);
};

const objEmpty = (obj) => Object.keys(obj).length === 0;

export const searchHotels = async (dispatch, getState) => {
  const state = getState();
  if (objEmpty(state.search.errors)) {
    let loadingAction = {
      type: "SET_HOTELS_LOADING",
      payload: { loading: true },
    };
    dispatch(loadingAction);

    const result = await fetch(
      `/api/hotels?destination=${state.search.destination}&roomQuantity=${state.search.roomQuantity}&checkIn=${state.search.checkIn}&checkOut=${state.search.checkOut}`
    );
    const data = await result.json();
    const hotelsAction = {
      type: "SET_HOTELS_LIST",
      payload: { hotels: data.hotels },
    };
    dispatch(hotelsAction);
  }
};
