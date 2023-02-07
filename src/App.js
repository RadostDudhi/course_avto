import React from "react";
import { Routes, Route } from "react-router-dom";

import { Auth, Home, Orders, OrderAdd } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="*" element={<Orders />} />
        <Route path="/orders" element={<Orders />} />
        {/* <Route path="/orders/add" element={<OrderAdd />} /> */}
      </Routes>
    </div>
  );
}

export default App;
