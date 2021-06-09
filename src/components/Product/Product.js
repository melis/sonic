import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "../Carousel/Carousel";
import styles from "./Product.module.scss";

const Product = ({ product }) => {
  const [varies, setVaries] = useState([]);
  // const [select, setSelect] = useState();
  const [min, setMin] = useState();

  useEffect(() => {
    let f = true;
    axios
      .get(
        `https://test2.sionic.ru/api/ProductVariations?&filter={"product_id":${product.id}}`
      )
      .then(({ data }) => {
        if (f) setVaries(data);
      });
    return () => {
      f = false;
    };
  }, [product]);

  useEffect(() => {
    let f = true;
    if (varies.length > 0) {
      let min = varies.reduce((p, v) => {
        return p < v.price ? p : v.price;
      }, varies[0].price);
      if (f) setMin(min);
    }
    return () => {
      f = false;
    };
  }, [varies]);

  return (
    <div className={styles.product}>
      <Img id={product.id} />
      <div className={styles.product__name}> {product.name}</div>
      <div className={styles.product__price}>от {min} ₽</div>
      <div className={styles.product__sale}>
        <span>500 ₽</span>
        -10%
      </div>
      <button className={styles.addBasket}>Добавить в корзину</button>
    </div>
  );
};
export default Product;

function Img({ id }) {
  const [img, setImg] = useState([]);

  useEffect(() => {
    let f = true;
    axios
      .get(
        `https://test2.sionic.ru/api/ProductImages?filter={"product_id":${id}}`
      )
      .then(({ data }) => {
        if (f) setImg(data);
      });
    return () => {
      f = false;
    };
  }, [id]);

  return (
    <div className={styles.img}>
      {img.length > 0 ? <Carousel imgs={img} /> : "loading..."}
    </div>
  );
}
