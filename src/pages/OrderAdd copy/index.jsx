import React from "react";
import Button from "../../components/Button";

import Select from "../../components/Select/Select";

import "./orderAdd.scss";
import { useState } from "react";

const OrderAdd = ({ create }) => {
  const [order, setOrder] = useState({ customer: "", product: [] });
  // добавление нового элемента в массив заказов (выводится в главную таблицу ордеров)
  const addNewOrder = () => {
    const newOrder = {
      ...order,
      id: Date.now(),
      status: "Draft",
      createdAt: Date(),
    };

    // callback функция -отправляю данные родительскому компоненту
    create(newOrder);
    setOrder({ customer: "", product: [] });
  };

  //  надо проверить добавление. непонятный код

  //     const addNewProduct = () => {
  //       e.preventDefault();
  //       let div = d.createElement("div");
  //       let cloneField = field.cloneNode();

  //       cloneField.value = "";
  //       div.appendChild(cloneField);
  //       newFields.appendChild(div);
  //     };

  //     let d = document,
  //       myForm = d.getElementsByClassName("order__add-main-products"),
  //       newFields = myForm.querySelector("#new_fields"),
  //       field = myForm.querySelector("div[type=text]"),
  //       butAdd = d.getElementById("addfields");
  //     butAdd.addEventListener("click", addNewProduct, false);

  return (
    <div className="order__add">
      <div className="order__add-title">Create order</div>
      <form className="order__add-main">
        {/* <input
          value={order.customer}
          onChange={(e) => setOrder({ ...order, customer: e.target.value })}
          type="text"
          placeholder="Customer"
        ></input>
        <input
          value={order.product}
          onChange={(e) => setOrder({ ...order, product: e.target.value })}
          type="text"
          placeholder="Product"
        ></input> */}

        <Select
          label="customer"
          name="order.customer"
          onChange={(e) => setOrder(e.target.value)}
          options={[
            { id: 555, name: "Pupkin" },
            { id: 787, name: "Volodin" },
            { id: 887, name: "Kernel" },
            { id: 77, name: "Pivun" },
            { id: 7, name: "Lososs" },
          ]}
          defaultValue={""}
        />
        <div className="order__add-main-products">
          {/* выводим или не выводим кнопку удалить продукт */}
          {/* {product.length > 1 ? setButtonActive(true) : setButtonActive(false)}; */}
          <div className="order__add-main-products-item" type="text">
            <Select
              label="product"
              onChange={(e) => setOrder(e.target.value)}
              options={[
                { id: 555, name: "Kartoshka" },
                { id: 787, name: "Morkovka" },
                { id: 887, name: "Goroh" },
                { id: 77, name: "Kolbasa" },
                { id: 7, name: "yaica" },
              ]}
              defaultValue={""}
            />
            <Button className="order__add-main-product-item-btn">Remove</Button>
          </div>
          <div id="new_fields"></div>

          <Button className="order__add-main-product-btn">+</Button>
        </div>
      </form>
      <div className="order__add-btn">
        <Button onClick={addNewOrder} className="order__add-btn button">
          Create
        </Button>
      </div>
    </div>

    // onChange={(option) => setUserId(option.value) }
  );
};

export default OrderAdd;
