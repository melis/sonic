import { combineReducers } from "redux";
import products from "./redusers/products/productsReduser";
import categories from "./redusers/categories/categoriesReduser";

export default combineReducers({ products, categories });
