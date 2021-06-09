import api from "../../../api/api";

export const setProducts = (category_id, r = 0) => {
  return (dispatch) => {
    dispatch({ type: "SET_LOADING" });
    api.getProducts(category_id, r).then(({ products, range }) => {
      dispatch({ type: "SET_PRODUCTS", products, category_id, range });
    });
  };
};

export const loadMore = (category_id, r = 0) => {
  return (dispatch) => {
    dispatch({ type: "SET_SUB_LOADING" });
    api.getProducts(category_id, r).then(({ products, range }) => {
      dispatch({ type: "LOAD_MORE_PRODUCTS", products, category_id, range });
    });
  };
};
