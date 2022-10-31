import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../contexts/products-context";
import Rating from "../rating/rating";

const RatingFilter = (props) => {
  const { className, rating, onChange, selectedRating } = props;
  const { countProductsWithRate } = useContext(ProductsContext);
  return (
    <div className={`${className}-container`}>
      <span>Rating</span>
      {rating.map((rate) => (
        <div key={rate} className={`${className}-option`}>
          <label className={`${className}-rating`} htmlFor={rate}>
            <input
              type="radio"
              name={rate}
              id={rate}
              onChange={onChange}
              checked={selectedRating === rate}
            />
            <Rating rate={rate} count={countProductsWithRate(rate)} />
          </label>
        </div>
      ))}
    </div>
  );
};

export default RatingFilter;
