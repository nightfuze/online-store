import React from "react";

import "./rating.scss";
import StarIcon from "../../assets/star.svg";
import StarHalfIcon from "../../assets/star-half.svg";
import StarZeroIcon from "../../assets/star-zero.svg";

const Rating = (props) => {
  const { rate, count } = props.rating;

  const totalStars = 5;
  const roundRate = Math.floor(rate);
  const isHalfStar = rate - roundRate >= 0.5;
  const zeroStars = isHalfStar
    ? totalStars - roundRate - 1
    : totalStars - roundRate;

  return (
    <div className="rating" title={rate}>
      <div className="rating-container">
        {[...Array(roundRate).keys()].map((key) => (
          <StarIcon key={key} />
        ))}
        {isHalfStar && <StarHalfIcon />}
        {[...Array(zeroStars).keys()].map((key) => (
          <StarZeroIcon key={key} />
        ))}
        <p className="rating-count">{count}</p>
      </div>
    </div>
  );
};

export default Rating;
