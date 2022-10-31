import React, { useState } from "react";
import SortTool from "../sort-tool/sort-tool";

import FilterIcon from "../../assets/filters.svg";

import "./toolbar.scss";

const ToolBar = ({ toggleFilters }) => {
  const [text, setText] = useState("Show");

  const onClickHandler = () => {
    toggleFilters();
    setText(text === "Show" ? "Close" : "Show");
  };

  return (
    <div className="toolbar">
      <div className="toolbar-container">
        <div className="toolbar-filter" onClick={onClickHandler}>
          <span>{text} Filters</span>
          <FilterIcon />
        </div>
        <SortTool className="toolbar-sort" />
      </div>
    </div>
  );
};

export default ToolBar;
