import React from "react";

const CategoryFilter = (props) => {
  const { onChange, categories, className, isChecked } = props;

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
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
