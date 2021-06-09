const initialState = {
  categories: [],
  loading: null,
  error: null,
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return {
        categories: action.categories,
        loading: false,
      };
    case "SET_LOADING":
      return { ...state, loading: true };
    case "SET_ERROR":
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default categories;
