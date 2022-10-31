import React from "react";
import Rating from "../rating/rating";

const RatingFilter = (props) => {
  const { className, rating, onChange, selectedRating } = props;
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
            <Rating rate={rate} count={0} />
          </label>
        </div>
      ))}
    </div>
  );
};

export default RatingFilter;
