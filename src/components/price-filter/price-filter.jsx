import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/products-context";

const PriceFilter = (props) => {
  const { onChange, className } = props;
  const { priceRange } = useContext(ProductsContext);
  const { minPrice, maxPrice } = priceRange;
  return (
    <div className={`${className}-container`}>
      <span>Price</span>
      <div className={`${className}-price-container`}>
        <div className={`${className}-price-item`}>
          <label htmlFor="minPrice"></label>
          <input
            className={`${className}-price-input`}
            type="number"
            id="minPrice"
            placeholder={minPrice}
            onChange={onChange}
          />
        </div>
        <div className={`${className}-price-item`}>-</div>
        <div className={`${className}-price-item`}>
          <label htmlFor="maxPrice"></label>
          <input
            className={`${className}-price-input`}
            type="number"
            id="maxPrice"
            placeholder={maxPrice}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
