import React from "react";
import { featuredmodel } from "./featuredmodelAPI";
import Categories from "./categories";
import Models from "./model";

import { useState } from "react";
import { Link } from "react-router-dom";
import SectionHead from "../../../../Components/SectionHead/sectionhead";

const items = featuredmodel;

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

const FeaturedModel = () => {
  const [modelItems, setModelsItems] = useState(items);
  const [
    categories,

    /*setCategories */
  ] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "All") {
      setModelsItems(items);
      return;
    }

    const newItem = items.filter((item) => item.category === category);
    setModelsItems(newItem);
  };

  return (
    <>
      <div className="container featured-container mtop">
        <SectionHead title="Models" description="Featured" />
        <Categories categories={categories} filterItems={filterItems} />
        <div className="featured-model-wrapper">
          <Models modelItems={modelItems} />
          <Link to="/find-model" className="featured-model-btn btn_shadow">
            Find models
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeaturedModel;
