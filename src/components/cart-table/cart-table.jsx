import React, { Fragment, useContext } from "react";
import { CartContext } from "../../contexts/cart-context";

import CartItem from "../cart-item/cart-item";

import "./cart-table.scss";

const CartTable = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <Fragment>
      <table className="cart">
        <thead>
          <tr className="cart-container">
            <th className="cart-image"></th>
            <th className="cart-title">Title</th>
            <th className="cart-price">Price</th>
            <th className="cart-amount">Amount</th>
            <th className="cart-total">Total</th>
            <th className="cart-remove"></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </tbody>
      </table>
      <h1>Total: ${cartTotal}</h1>
    </Fragment>
  );
};

export default CartTable;
