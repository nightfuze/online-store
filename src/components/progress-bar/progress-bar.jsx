import React from "react";

import "./progress-bar.scss";

const ProgressBar = (props) => {
  const { stepNames, step } = props;
  return (
    <div className="progressbar-container">
      <div className="progressbar">
        {stepNames.map((name, index) => (
          <div
            key={index}
            className={`progressbar-step ${
              step === index + 1
                ? "progressbar-step--active"
                : step > index + 1
                ? "progressbar-step--completed"
                : ""
            }`}
            data-title={name}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
