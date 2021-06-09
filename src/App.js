import React from "react";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Box from "./components/Box/Box";
const App = () => {
  return (
    <div className="container">
      <Router>
        <Route exact path="/">
          <Categories />
          <Products />
          <button
            onClick={() => {
              console.log(JSON.parse(localStorage.getItem("box")));
            }}
          >
            Показать корзину в консоле
          </button>
        </Route>
        <Route exact path="/box">
          <Box />
        </Route>
      </Router>
    </div>
  );
};
export default App;
