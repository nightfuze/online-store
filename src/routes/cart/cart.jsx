import React, { useContext } from "react";
import CartTable from "../../components/cart-table/cart-table";
import { CartContext } from "../../contexts/cart-context";

import "./cart.scss";
import NotifyMessage from "../../components/notify-message/notify-message";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="container">
      {cartItems.length ? (
        <CartTable />
      ) : (
        <NotifyMessage notifyMessage="emptyCart" />
      )}
    </div>
  );
};

export default Cart;
