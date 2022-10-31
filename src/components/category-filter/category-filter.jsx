import React from "react";

const CategoryFilter = (props) => {
  const { onChange, categories, className } = props;
  return (
    <div className={`${className}-container`}>
      <span>Category</span>
      {categories.map((category) => (
        <div key={category} className={`${className}-option`}>
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
