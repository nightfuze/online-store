import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/products-context";

const CategoryFilter = (props) => {
  const { onChange, categories, className, isChecked } = props;

  const { countProductsWithCategory } = useContext(ProductsContext);

  return (
    <div className={`${className}-container`}>
      <span>Category</span>
      {categories.map((category, index) => (
        <div key={index} className={`${className}-option`}>
          <input
            onChange={(e) => onChange(e, index)}
            type="checkbox"
            name={category}
            id={category}
            checked={isChecked[index]}
          />
          <label htmlFor={category}>{category}</label>
          <span>{countProductsWithCategory(category)}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
