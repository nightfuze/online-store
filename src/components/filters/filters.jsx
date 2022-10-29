import React, { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/products-context";
import Button from "../button/button";
import CategoryFilter from "../category-filter/category-filter";
import RatingFilter from "../rating-filter/rating-filter";

import "./filters.scss";

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const rating = ["5", "4", "3", "2", "1"];

const Filters = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const { applyFilters, resetFilters } = useContext(ProductsContext);

  console.log({ selectedCategories, selectedRating });

  const onChangeCategoryHandler = (e) => {
    if (e.target.checked) {
      setSelectedCategories([...selectedCategories, e.target.id]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== e.target.id)
      );
    }
  };

  const onChangeRatingHandler = (e) => {
    setSelectedRating(e.target.id);
  };

  const onApplyHandler = () => {
    applyFilters(selectedCategories, selectedRating);
  };

  const onResetHandler = () => resetFilters();

  return (
    <aside className="filters">
      <CategoryFilter
        onChange={onChangeCategoryHandler}
        categories={categories}
      />
      <RatingFilter
        onChange={onChangeRatingHandler}
        rating={rating}
        selectedRating={selectedRating}
      />
      <Button onClick={onApplyHandler}>apply</Button>
      <Button onClick={onResetHandler}>reset</Button>
    </aside>
  );
};

export default Filters;
