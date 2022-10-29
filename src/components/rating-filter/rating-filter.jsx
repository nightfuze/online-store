import React from "react";

const RatingFilter = ({ rating, onChange, selectedRating }) => {
  return (
    <div>
      <span>Rating</span>
      {rating.map((rate) => (
        <div key={rate}>
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
