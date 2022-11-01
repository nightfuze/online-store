import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";

import "./cart-table.scss";

const CartTable = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <Fragment>
      <table className="cart-table">
        <thead className="cart-table-header">
          <tr className="cart-table-row">
            <th className="cart-table-image"></th>
            <th className="cart-table-title">Title</th>
            <th className="cart-table-price">Price</th>
            <th className="cart-table-amount">Amount</th>
            <th className="cart-table-total">Total</th>
            <th className="cart-table-remove"></th>
          </tr>
        </thead>
        <tbody className="cart-table-body">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </tbody>
      </table>
      <div className="cart-table-footer">
        <div className="cart-table-footer-container">
          <h1>Total: ${cartTotal}</h1>
          <Link to="/order">
            <Button>order</Button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default CartTable;
