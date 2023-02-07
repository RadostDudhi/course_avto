import React from "react";
import Button from "../../components/Button";

import Select from "../../components/Select/Select";

import "./orderAdd.scss";
import { useState } from "react";

const OrderAdd = ({ create }) => {
  const [inputProductFields, setInputProductFields] = useState([
    { product: "" },
  ]);

  const handleFormChange = (index, event) => {
    let data = [...inputProductFields];
    data[index][event.target.name] = event.target.value;
    setInputProductFields(data);
  };

  const addFields = (e) => {
    e.preventDefault();
    let newfield = { product: "" };
    setInputProductFields([...inputProductFields, newfield]);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(inputProductFields);
  };

  const removeFields = (index) => {
    let data = [...inputProductFields];
    data.splice(index, 1);
    setInputProductFields(data);
  };
  return (
    <div className="App">
      <div className="order__add">
        <div className="order__add-title">Create order</div>
        <form className="order__add-main" onSubmit={submit}>
          <Select
            label="customer"
            name="customer"
            // onChange={(e) => setOrder(e.target.value)}
            // value={order.customer}
            options={[
              { id: 555, name: "Pupkin" },
              { id: 787, name: "Volodin" },
              { id: 887, name: "Kernel" },
              { id: 77, name: "Pivun" },
              { id: 7, name: "Lososs" },
            ]}
            defaultValue={""}
          />

          {/* создаем массив продуктов customer */}
          <div className="order__add-main-products">
            {inputProductFields.map((select, index) => {
              return (
                <div className="order__add-main-products-item" key={index}>
                  {/* <input
                    name="name"
                    placeholder="Name"
                    value={input.product}
                    onChange={(event) => handleFormChange(index, event)}
                  /> */}

                  {/* выводим или не выводим кнопку удалить продукт */}

                  {/* {product.length > 1 ? setButtonActive(true) : setButtonActive(false)}; */}
                  <Select
                    label="product"
                    name="product"
                    onChange={(event) => handleFormChange(index, event)}
                    options={[
                      { id: 555, name: "Kartoshka" },
                      { id: 787, name: "Morkovka" },
                      { id: 887, name: "Goroh" },
                      { id: 77, name: "Kolbasa" },
                      { id: 7, name: "yaica" },
                    ]}
                    defaultValue={""}
                  />
                  <Button
                    className="order__add-main-products-item-btn"
                    onClick={() => removeFields(index)}
                  >
                    Remove
                  </Button>
                </div>
              );
            })}
            <Button className="order__add-main-product-btn" onClick={addFields}>
              +
            </Button>
          </div>
        </form>
        <div className="order__add-btn">
          <Button onClick={submit} className="order__add-btn button">
            Create
          </Button>
        </div>
      </div>
    </div>
  );

  //   const [order, setOrder] = useState([{ customer: "", products: [] }]);
  //   // добавление нового элемента в массив заказов (выводится в главную таблицу ордеров)
  //   const addNewOrder = () => {
  //     const newOrder = {
  //       ...order,
  //       id: Date.now(),
  //       status: "Draft",
  //       createdAt: Date(),
  //     };
  //     // callback функция -отправляю данные родительскому компоненту
  //     create(newOrder);
  //     setOrder({ customer: "", products: [] });
  //   };
  //   const handleFormChange = (index, event) => {
  //     let data = [...order];
  //     data[index][event.target.name] = event.target.value;
  //     setOrder(data);
  //   };
  //   const addFields = () => {
  //     let newfield = { product: "" };
  //   };
  //   return (
  //     <div className="order__add">
  //       <div className="order__add-title">Create order</div>
  //       <form className="order__add-main">
  //         <Select
  //           label="customer"
  //           name="order.customer"
  //           onChange={(e) => setOrder(e.target.value)}
  //           value={order.customer}
  //           options={[
  //             { id: 555, name: "Pupkin" },
  //             { id: 787, name: "Volodin" },
  //             { id: 887, name: "Kernel" },
  //             { id: 77, name: "Pivun" },
  //             { id: 7, name: "Lososs" },
  //           ]}
  //           defaultValue={""}
  //         />
  //         <div className="order__add-main-products">
  //           {/* выводим или не выводим кнопку удалить продукт */}
  //           {/* {product.length > 1 ? setButtonActive(true) : setButtonActive(false)}; */}
  //           {order.map((order, index) => {
  //             return (
  //               <div className="order__add-main-products-item" key={index}>
  //                 <Select
  //                   label="product"
  //                   value={order.product}
  //                   name="order.product"
  //                   onChange={(event) => handleFormChange(index, event)}
  //                   options={[
  //                     { id: 555, name: "Kartoshka" },
  //                     { id: 787, name: "Morkovka" },
  //                     { id: 887, name: "Goroh" },
  //                     { id: 77, name: "Kolbasa" },
  //                     { id: 7, name: "yaica" },
  //                   ]}
  //                   defaultValue={""}
  //                 />
  //                 <Button className="order__add-main-product-item-btn">
  //                   Remove
  //                 </Button>
  //               </div>
  //             );
  //           })}
  //           <Button className="order__add-main-product-btn" onClick={addFields}>
  //             +
  //           </Button>
  //         </div>
  //       </form>
  //       <div className="order__add-btn">
  //         <Button onClick={addNewOrder} className="order__add-btn button">
  //           Create
  //         </Button>
  //       </div>
  //     </div>
  //     // onChange={(option) => setUserId(option.value) }
  //   );
};

export default OrderAdd;
