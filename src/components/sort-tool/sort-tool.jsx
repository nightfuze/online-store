import React, { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/products-context";

const SortTool = () => {
  const { sortProductsByValue } = useContext(ProductsContext);

  const onChangeHandler = (e) => {
    sortProductsByValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor="sortBy">Sort by: </label>
      <select id="sortBy" onChange={onChangeHandler}>
        <option value="default">Default</option>
        <option value="priceDesc">Price High</option>
        <option value="priceAsc">Price Low</option>
      </select>
    </div>
  );
};

export default SortTool;
