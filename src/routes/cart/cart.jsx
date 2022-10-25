import React, { useContext } from "react";
import CartItem from "../../components/cart-item/cart-item";
import { CartContext } from "../../contexts/cart-context";

import "./cart.scss";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
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
  );
};

export default Cart;
