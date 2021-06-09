import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import setCategories from "../../store/redusers/categories/categoriesActions";
import styles from "./Categories.module.scss";
import cn from "classnames";
import { setProducts } from "../../store/redusers/products/productsActions";

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);
  const { category_id } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categories.length > 0) dispatch(setProducts(categories[0].id));
  }, [categories, dispatch]);

  return (
    <div className={styles.category}>
      {categories.map((el) => (
        <div
          className={cn(styles.category__item, {
            [styles.category__item__active]: el.id === category_id,
          })}
          key={el.id}
          onClick={() => {
            if (category_id !== el.id) dispatch(setProducts(el.id, 0));
          }}
        >
          {el.name}
        </div>
      ))}
    </div>
  );
};
export default Categories;
