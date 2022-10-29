import React, { useContext, useState } from "react";

import { ProductsContext } from "../../contexts/products-context";

import Button from "../button/button";

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];
const CategoryFilter = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { categoriesFilter } = useContext(ProductsContext);

  const onChangeHandler = (e) => {
    if (e.target.checked) {
      setSelectedCategories([...selectedCategories, e.target.id]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== e.target.id)
      );
    }
  };

  const onClickHandler = () => {
    categoriesFilter(selectedCategories);
  };

  return (
    <div>
      <span>category</span>
      {categories.map((category) => (
        <div key={category}>
          <input
            onChange={onChangeHandler}
            type="checkbox"
            name={category}
            id={category}
          />
          <label htmlFor={category}>{category}</label>
        </div>
      ))}
      <Button onClick={onClickHandler}>apply</Button>
    </div>
  );
};

export default CategoryFilter;
