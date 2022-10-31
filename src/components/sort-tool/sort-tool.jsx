import React, { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/products-context";

import "./sort-tool.scss";

const SortTool = () => {
  const { sortProductsByValue } = useContext(ProductsContext);

  const onChangeHandler = (e) => {
    sortProductsByValue(e.target.value);
  };

  return (
    <div className="sort">
      <label className="sort-label" htmlFor="sortBy">
        Sort by:{" "}
      </label>
      <select className="sort-select" id="sortBy" onChange={onChangeHandler}>
        <option className="sort-option" value="default">
          Default
        </option>
        <option className="sort-option" value="priceDesc">
          Price High
        </option>
        <option className="sort-option" value="priceAsc">
          Price Low
        </option>
      </select>
    </div>
  );
};

export default SortTool;
