import React, { Fragment, useContext } from "react";
import { CartContext } from "../../contexts/cart-context";

import "./cart-item.scss";

const CartItem = ({ cartItem }) => {
  const { title, price, image, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

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
            <div className="arrow" onClick={removeItemHandler}>
              &#10094;
            </div>
            {quantity}
            <div className="arrow" onClick={addItemHandler}>
              &#10095;
            </div>
          </div>
        </td>
        <td className="cart-item-total">${(price * quantity).toFixed(2)}</td>
        <td>
          <div className="cart-item-remove" onClick={clearItemHandler}>
            Remove
          </div>
        </td>
      </tr>
    </Fragment>
  );
};

export default CartItem;
