const initStateReducer = {
  isLoading: false,
};

const generalReducer = (state = initStateReducer, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};

export default generalReducer;
