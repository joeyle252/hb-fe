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
