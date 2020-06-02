export const fetchHotelDetail = (hotelId) => {
  return async (dispatch, getState) => {
    let loadingAction = {
      type: "SET_DETAIL_LOADING",
      payload: { loading: true },
    };
    dispatch(loadingAction);
    const url = `${process.env.REACT_APP_BASE_API_URL}/hotel/${hotelId}`;
    const result = await fetch(url);
    const data = await result.json();

    const hotelDetailAction = {
      type: "SET_DETAIL_HOTEL",
      payload: { hotel: data.hotel },
    };
    dispatch(hotelDetailAction);
  };
};
