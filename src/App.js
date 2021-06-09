import React from "react";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
const App = () => {
  return (
    <div className="container">
      <Categories />
      <Products />
      <button
        onClick={() => {
          console.log(JSON.parse(localStorage.getItem("basket")));
        }}
      >
        Показать корзину в консоле
      </button>
    </div>
  );
};
export default App;
