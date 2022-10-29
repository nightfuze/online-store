import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/products-context";

const PriceFilter = ({ onChange }) => {
  const { priceRange } = useContext(ProductsContext);
  const { minPrice, maxPrice } = priceRange;
  return (
    <div>
      <span>Price</span>
      <div>
        <label htmlFor="minPrice">min</label>
        <input
          type="number"
          id="minPrice"
          placeholder={`Min: ${minPrice}`}
          onChange={onChange}
        />
        <label htmlFor="maxPrice">max</label>
        <input
          type="number"
          id="maxPrice"
          placeholder={`Max: ${maxPrice}`}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default PriceFilter;
