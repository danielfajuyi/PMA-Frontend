import React from "react";
import "./CategoryLable.css";

const CategoryLabel = ({ lable, id }) => {
  return (
    <p className="categoryLable" id={id}>
      {" "}
      {lable}
    </p>
  );
};

export default CategoryLabel;
