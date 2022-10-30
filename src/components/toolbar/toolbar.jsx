import React from "react";
import SortTool from "../sort-tool/sort-tool";

const ToolBar = ({ toggleFilters }) => {
  return (
    <div>
      <span>Toolbar</span>
      <div onClick={toggleFilters}>show filters</div>
      <SortTool />
    </div>
  );
};

export default ToolBar;
