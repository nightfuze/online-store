import React from "react";

const RatingFilter = (props) => {
  const { className, rating, onChange, selectedRating } = props;
  return (
    <div className={`${className}-container`}>
      <span>Rating</span>
      {rating.map((rate) => (
        <div key={rate} className={`${className}-option`}>
          <label htmlFor={rate}>
            <input
              type="radio"
              name={rate}
              id={rate}
              onChange={onChange}
              checked={selectedRating === rate}
            />
            {rate} +
          </label>
        </div>
      ))}
    </div>
  );
};

export default RatingFilter;
