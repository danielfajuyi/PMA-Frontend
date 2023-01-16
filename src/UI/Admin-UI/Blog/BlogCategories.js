import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="featured-desc">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="btn_shadow blogfeatured-btn "
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
