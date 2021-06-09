const initialState = {
  products: [],
  category_id: null,
  loading: null,
  subLoading: null,
  error: null,
  range: 0,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.products,
        category_id: action.category_id,
        loading: false,
        range: action.range,
      };
    case "LOAD_MORE_PRODUCTS":
      return {
        ...state,
        products: [...state.products, ...action.products],
        subLoading: false,
        range: action.range,
      };
    case "SET_LOADING":
      return { ...state, loading: true };
    case "SET_SUB_LOADING":
      return { ...state, subLoading: true };
    case "SET_ERROR":
      return {
        ...state,
        error: action.error,
        loading: false,
        subLoading: false,
      };
    default:
      return state;
  }
};

export default products;
