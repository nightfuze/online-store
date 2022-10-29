import React from "react";
import CategoryFilter from "../category-filter/category-filter";

import "./filters.scss";

const Filters = () => {
  return (
    <aside className="filters">
      <CategoryFilter />
    </aside>
  );
};

export default Filters;
