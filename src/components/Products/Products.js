import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMore } from "../../store/redusers/products/productsActions";
import Product from "../Product/Product";
import styles from "./Products.module.scss";

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading, range, category_id } = useSelector((state) => {
    return state.products;
  });
  if (loading) return <div>loading...</div>;

  return (
    <>
      <div className={styles.products}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <button
        className={styles.button}
        onClick={() => {
          dispatch(loadMore(category_id, range + 1));
        }}
      >
        Показать больше товаров
      </button>
    </>
  );
};
export default Products;
