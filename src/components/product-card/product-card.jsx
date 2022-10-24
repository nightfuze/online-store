import React from "react";

import "./product-card.scss";

const ProductCard = ({ product }) => {
  const { title, price, image } = product;
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <div className="product-card-container">
        <h2 className="product-card-title">{title}</h2>
        <div className="product-card-footer">
          <span>Price: ${price}</span>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
