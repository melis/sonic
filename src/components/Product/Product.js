import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "../Carousel/Carousel";
import styles from "./Product.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const [varies, setVaries] = useState([]);
  const [select, setSelect] = useState();
  const [active, setActive] = useState(false);
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
      <div className={styles.product__info}>
        <div>
          <div className={styles.product__name}> {product.name}</div>
          <div className={styles.product__price}>от {min} ₽</div>
          <div className={styles.product__sale}>
            <span>500 ₽</span>
            -10%
          </div>
        </div>
        {!select ? (
          <button
            className={styles.addBasket}
            onClick={() => {
              setActive(true);
              setTimeout(() => {
                setActive(false);
              }, 20000);
            }}
          >
            Добавить в корзину
          </button>
        ) : (
          <div className={styles.addBasket__go}>
            <Link to="/box"> В корзине</Link>
          </div>
        )}
      </div>

      <div className={cn(styles.select, { [styles.select__active]: active })}>
        {varies.map((el) => (
          <Label
            el={el}
            key={el.id}
            setSelect={setSelect}
            select={select}
            product_name={product.name}
          />
        ))}
        <button
          className={styles.select__button}
          disabled={!select}
          onClick={() => {
            const x = localStorage.getItem("box")
              ? JSON.parse(localStorage.getItem("box"))
              : [];
            localStorage.setItem("box", JSON.stringify([...x, select]));
            setActive(false);
          }}
        >
          Добавить
        </button>
        <button
          className={styles.select__button}
          onClick={() => {
            setActive(false);
          }}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};
export default Product;

function Label({ el, setSelect, select, product_name }) {
  const [count, setCount] = useState(1);
  const [id, setId] = useState();
  useEffect(() => {
    setId(select ? select.id : null);
  }, [select]);
  useEffect(() => {
    if (el.id === id) setSelect({ ...el, count, product_name });
  }, [count, id, el, setSelect, product_name]);
  return (
    <div className={styles.label}>
      <label>
        <div className={styles.label__box}>
          <span>
            <input
              type="radio"
              onChange={() => {
                setSelect({ ...el, product_name, count });
              }}
              checked={id === el.id}
            />
            #{el.id}
          </span>
          <span>Цена: {el.price} р.</span>
        </div>
        <div className={styles.label__box}>
          <span>
            <input
              type="number"
              min="1"
              max={el.stock}
              style={{ width: "40px" }}
              value={count}
              onChange={(e) => {
                setCount(Number(e.target.value));
              }}
            />{" "}
            шт
          </span>
          <span>В нал. {el.stock} шт.</span>
        </div>
      </label>
    </div>
  );
}

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
