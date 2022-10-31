import React from "react";

import "./rating.scss";
import StarIcon from "../../assets/star.svg";
import StarHalfIcon from "../../assets/star-half.svg";
import StarZeroIcon from "../../assets/star-zero.svg";

const Rating = (props) => {
  const { rate, count } = props;

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
        <span className="rating-count">{count}</span>
      </div>
    </div>
  );
};

export default Rating;
