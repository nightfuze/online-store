import React, { useContext, useEffect, useState } from "react";
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

const rating = ["4.5", "3.5", "2.5", "1.5", "0.5"];

const Filters = () => {
  const [checkedCategories, setCheckedCategories] = useState(
    Array(categories.length).fill(false)
  );
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [minPriceValue, setMinPriceValue] = useState("");
  const [maxPriceValue, setMaxPriceValue] = useState("");
  const [selectedPrice, setSelectedPrice] = useState({});
  const { applyFilters, resetFilters } = useContext(ProductsContext);

  const onChangeCategoryHandler = (e, position) => {
    const updatedCheckedState = checkedCategories.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedCategories(updatedCheckedState);
  };

  useEffect(() => {
    const newSelected = checkedCategories
      .map((e, index) => (e ? categories[index] : null))
      .filter((e) => e !== null);
    setSelectedCategories(newSelected);
  }, [checkedCategories]);

  const onChangeRatingHandler = (e) => {
    setSelectedRating(e.target.id);
  };

  const onChangePriceHandler = (e) => {
    console.log(e.target.value, e.target.id);
    if (e.target.id === "minPrice" && e.target.value) {
      setMinPriceValue(e.target.value);
      setSelectedPrice({ ...selectedPrice, minPrice: e.target.value });
    }
    if (e.target.id === "maxPrice") {
      setMaxPriceValue(e.target.value);
      setSelectedPrice({ ...selectedPrice, maxPrice: e.target.value });
    }
  };

  const onApplyHandler = () =>
    applyFilters(selectedCategories, selectedRating, selectedPrice);

  const onResetHandler = () => {
    setCheckedCategories(checkedCategories.map(() => false));
    resetFilters();
    setSelectedRating(0);
    setSelectedPrice({});
    setMinPriceValue("");
    setMaxPriceValue("");
  };

  console.log({ selectedCategories });

  return (
    <aside className="filters">
      <CategoryFilter
        className="filters"
        onChange={onChangeCategoryHandler}
        categories={categories}
        isChecked={checkedCategories}
      />
      <RatingFilter
        className="filters"
        onChange={onChangeRatingHandler}
        rating={rating}
        selectedRating={selectedRating}
      />
      <PriceFilter
        className="filters"
        onChange={onChangePriceHandler}
        minPriceValue={minPriceValue}
        maxPriceValue={maxPriceValue}
      />
      <Button onClick={onApplyHandler}>apply</Button>
      <Button onClick={onResetHandler}>reset</Button>
    </aside>
  );
};

export default Filters;
