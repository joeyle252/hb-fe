export const fetchHotelDetail = (hotelId) => {
  return async (dispatch, getState) => {
    //debugger;
    let loadingAction = {
      type: "SET_DETAIL_LOADING",
      payload: { loading: true },
    };
    dispatch(loadingAction);
    const url = `/api/hotel/${hotelId}`;
    const result = await fetch(url);
    const data = await result.json();
    const hotelDetailAction = {
      type: "SET_DETAIL_HOTEL",
      payload: { hotel: data.hotel },
    };
    dispatch(hotelDetailAction);
  };
};
