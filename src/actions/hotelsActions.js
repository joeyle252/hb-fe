

export const fetchHotels = async (dispatch, getState) => {
  let loadingAction = {
    type: "SET_HOTELS_LOADING",
    payload: { loading: true },
  };
  dispatch(loadingAction);

  const result = await fetch("/api/hotels");
  const data = await result.json();
  const hotelsAction = {
    type: "SET_HOTELS_LIST",
    payload: { hotels: data.hotels },
  };
  dispatch(hotelsAction);
};


// const result = await fetch(
//   `/api/hotels?destination=${state.search.destination}&roomQuantity=${state.search.roomQuantity}&checkIn=${state.search.checkIn}&checkOut=${state.search.checkOut}`
// );