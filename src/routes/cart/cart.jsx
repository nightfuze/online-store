import React, { Fragment, useContext } from "react";
import CartTable from "../../components/cart-table/cart-table";
import { CartContext } from "../../contexts/cart-context";
import Button from "../../components/button/button";

import "./cart.scss";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="container">
      {cartItems.length ? (
        <CartTable />
      ) : (
        <div className="cart-container">
          <h1>Your cart is Empty</h1>
          <Link to="/">
            <Button>Go back to store</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
