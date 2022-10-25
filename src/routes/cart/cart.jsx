import React, { Fragment, useContext } from "react";
import CartTable from "../../components/cart-table/cart-table";
import { CartContext } from "../../contexts/cart-context";

import "./cart.scss";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <Fragment>
      {cartItems.length ? <CartTable /> : <h1>Your cart is Empty</h1>}
    </Fragment>
  );
};

export default Cart;
