import React, { Fragment } from "react";

import "./cart-item.scss";

const CartItem = ({ cartItem }) => {
  const { title, price, image, quantity } = cartItem;

  return (
    <Fragment>
      <tr className="cart-item">
        <td className="cart-item-image-container">
          <img className="cart-item-image" src={image} alt="Image" />
        </td>
        <td className="cart-item-title">{title}</td>
        <td className="cart-item-price">${price}</td>
        <td className="cart-item-quantity-container">
          <div className="cart-item-quantity">
            <div className="arrow">&#10094;</div>
            {quantity}
            <div className="arrow">&#10095;</div>
          </div>
        </td>
        <td className="cart-item-total">total value</td>
        <td>Remove</td>
      </tr>
    </Fragment>
  );
};

export default CartItem;
