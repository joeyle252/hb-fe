const initialState = {
  loading: false,
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_LOADING": {
      return {
        ...state,
        loading: action.payload.loading,
      };
    }
    case "SET_USER": {
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };
    }
    case "SIGNOUT_USER": {
      return {
        ...state,
        loading: false,
        user: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
