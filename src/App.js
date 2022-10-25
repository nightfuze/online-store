import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./routes/cart/cart";

import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Order from "./routes/order/order";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="order" element={<Order />} />
      </Route>
    </Routes>
  );
};

export default App;
