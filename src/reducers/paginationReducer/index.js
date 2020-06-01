const initialState = {
  page: 1,
};

const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PAGE": {
      return {
        ...state,
        page: action.payload.page,
      };
    }
    default:
      return state;
  }
};

export default paginationReducer;
