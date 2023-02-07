import React from "react";
import { useState } from "react";
import Button from "../../components/Button";
import Search from "../../components/Search";
import { OrderTable } from "../../modules";
import { Modal } from "../../components/index.";
import { OrderAdd } from "../index";

import "./orders.scss";

const Orders = () => {
  const [modalActive, setModalActive] = useState(false);

  // массив заказов
  const [orders, setOrders] = useState([
    {
      key: 0,
      status: "Draft",
      customer: "Pupkin",
      totalPrice: 85,
      createdAt: "2023-01-20T16:59:06.609Z",
    },
    {
      key: 1,
      status: "Canceled",
      customer: "Pupkin",
      totalPrice: 2,
      createdAt: "2023-01-20T16:45:06.609Z",
    },
    {
      key: 2,
      status: "Draft",
      customer: "Pupkin",
      totalPrice: 85,
      createdAt: "2023-01-20T16:59:06.609Z",
    },
    {
      key: 3,
      status: "Canceled",
      customer: "Pupkin",
      totalPrice: 47,
      createdAt: "2023-01-20T16:45:06.609Z",
    },
    {
      key: 4,
      status: "Draft",
      customer: "Pupkin",
      totalPrice: 55,
      createdAt: "2023-01-20T16:59:06.609Z",
    },
    {
      key: 5,
      status: "Canceled",
      customer: "Pupkin",
      totalPrice: 2,
      createdAt: "2023-01-20T16:45:06.609Z",
    },
  ]);

  {
    /*callback функция*/
  }
  const createOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  return (
    <section className="orders">
      <div className="container">
        <div className="orders__top">
          <div className="orders__search">
            <Search />
          </div>
          <div className="orders__top-btns button">
            <Button
              className="orders__top-btn button"
              onClick={() => setModalActive(true)}
            >
              Add order
            </Button>
          </div>
        </div>

        {/* передаю массив заказов в таблицу */}
        <OrderTable orders={orders} />

        {/* открываю модальное окно */}
        <Modal active={modalActive} setActive={setModalActive}>
          {/* вызываю callback функцию */}
          <OrderAdd create={createOrder} />
          <Button
            className="order__add-btn button button__back"
            onClick={() => setModalActive(false)}
          >
            Back
          </Button>
        </Modal>
      </div>
    </section>
  );
};

export default Orders;
