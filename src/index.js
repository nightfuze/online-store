import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { ProductsProvider } from "./contexts/products-context";
import { CartProvider } from "./contexts/cart-context";
import { OrderProvider } from "./contexts/order-context";

import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ProductsProvider>
      <OrderProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </OrderProvider>
    </ProductsProvider>
  </BrowserRouter>
);
