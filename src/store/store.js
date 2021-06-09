import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReduser from "./rootReduser";

export default createStore(rootReduser, applyMiddleware(reduxThunk));
