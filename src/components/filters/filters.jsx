import React, { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/products-context";
import Button from "../button/button";
import CategoryFilter from "../category-filter/category-filter";
import PriceFilter from "../price-filter/price-filter";
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
  const [selectedPrice, setSelectedPrice] = useState({});
  const { applyFilters, resetFilters } = useContext(ProductsContext);

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

  const onChangePriceHandler = (e) => {
    console.log(e.target.value, e.target.id);
    if (e.target.id === "minPrice" && e.target.value) {
      setSelectedPrice({ ...selectedPrice, minPrice: e.target.value });
    }
    if (e.target.id === "maxPrice") {
      setSelectedPrice({ ...selectedPrice, maxPrice: e.target.value });
    }
  };

  const onApplyHandler = () =>
    applyFilters(selectedCategories, selectedRating, selectedPrice);

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
      <PriceFilter onChange={onChangePriceHandler} />
      <Button onClick={onApplyHandler}>apply</Button>
      <Button onClick={onResetHandler}>reset</Button>
    </aside>
  );
};

export default Filters;
