import React, { useState } from "react";
import styles from "./Box.module.scss";

const Box = () => {
  const [arr, setArr] = useState(
    localStorage.getItem("box") ? JSON.parse(localStorage.getItem("box")) : []
  );

  return (
    <div>
      {arr.map((el) => (
        <div
          key={el.id}
          style={{ borderBottom: "1px solid", margin: "20px", padding: "15px" }}
        >
          {el.product_name} Цена {el.price}р, Количество {el.count}, Сумма:{" "}
          {el.count * el.price}р
          <button
            onClick={() => {
              setArr(arr.filter((a) => a.id !== el.id));
              localStorage.setItem(
                "box",
                JSON.stringify(arr.filter((a) => a.id !== el.id))
              );
            }}
          >
            Удалить
          </button>
        </div>
      ))}
      {arr.length < 1 ? "Пусто" : null}
    </div>
  );
};
export default Box;
