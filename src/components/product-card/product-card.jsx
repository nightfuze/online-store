import React, { useState, useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import Button from "../button/button";
import Rating from "../rating/rating";

import "./product-card.scss";

const ProductCard = ({ product }) => {
  const { title, price, image } = product;
  const { addItemToCart, removeItemFromCart, isItemInCart } =
    useContext(CartContext);

  const [buttonText, setButtonText] = useState(
    isItemInCart(product) ? "Remove" : "Add to cart"
  );

  const onClickHandler = () => {
    if (buttonText === "Add to cart") {
      addItemToCart(product);
      setButtonText("Remove");
    } else {
      removeItemFromCart(product);
      setButtonText("Add to cart");
    }
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <img className="product-card-image" src={image} alt={title} />
      </div>
      <div className="product-card-container">
        <h2 className="product-card-title" title={title}>
          {title}
        </h2>
        <div className="product-card-footer">
          <span className="product-card-price">${price}</span>
          <Rating rate={product.rating.rate} count={product.rating.count} />
        </div>
        <Button
          buttonType="inverted"
          children={buttonText}
          onClick={onClickHandler}
        />
      </div>
    </div>
  );
};

export default ProductCard;
