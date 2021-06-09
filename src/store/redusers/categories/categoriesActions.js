import api from "../../../api/api";

export const setCategories = () => {
  return (dispatch) => {
    dispatch({ type: "SET_LOADING" });
    api.getCategories().then((categories) => {
      dispatch({ type: "SET_CATEGORIES", categories });
    });
  };
};
export default setCategories;
