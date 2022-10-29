import React from "react";

const CategoryFilter = ({ onChange, categories }) => {
  return (
    <div>
      <span>category</span>
      {categories.map((category) => (
        <div key={category}>
          <input
            onChange={onChange}
            type="checkbox"
            name={category}
            id={category}
          />
          <label htmlFor={category}>{category}</label>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
