import React from "react";

import "./progress-bar.scss";

const ProgressBar = (props) => {
  const { stepNames, step } = props;
  return (
    <div class="progressbar-container">
      <div className="progressbar">
        {stepNames.map((name, index) => (
          <div
            key={index}
            class={`progressbar-step ${
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
