const buildUrl = (state) => {
  let qs = "";

  const fields = [
    { key: "destination", value: state.search.destination },
    { key: "checkIn", value: state.search.checkIn },
    { key: "checkOut", value: state.search.checkOut },
    { key: "roomQuantity", value: state.search.roomQuantity },
    { key: "starRating", value: state.filters.starRating.join(",") }, //convert star rating array to a string of numbers "2,3,4,5"
    { key: "priceMaximum", value: state.filters.priceMaximum * 1000000 },
    { key: "page", value: state.pagination.page },
  ];
  //debugger;
  fields.forEach((field, idx) => {
    if (field.value) {
      qs += `${idx === 0 ? "" : "&"}${field.key}=${field.value}`;
    }
  });
  const url = `${process.env.REACT_APP_BASE_API_URL}/hotels?${qs}`;
  return url;
};

const objEmpty = (obj) => Object.keys(obj).length === 0;
///

export const fetchHotels = async (dispatch, getState) => {
  const state = getState();
  if (objEmpty(state.search.errors)) {
    let loadingAction = {
      type: "SET_HOTELS_LOADING",
      payload: { loading: true },
    };
    dispatch(loadingAction);
    const url = buildUrl(state);
    const result = await fetch(url);
    const data = await result.json();
    const hotelsAction = {
      type: "SET_HOTELS_LIST",
      payload: { hotels: data.hotels },
    };
    dispatch(hotelsAction);
  }
};
