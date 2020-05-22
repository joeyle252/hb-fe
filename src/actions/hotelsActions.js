// const fetchHotels = async () => {
//     setLoading(true);
//     const result = await fetch("/api/hotels");
//     const data = await result.json(); // {hotels: []}
//     setHotels(data.hotels);
//     setLoading(false);
//   };

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
