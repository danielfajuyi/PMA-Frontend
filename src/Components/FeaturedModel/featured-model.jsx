import React from "react";
import "./model.css";
import { featuredmodel } from "./featuredmodelAPI";
import Categories from "./categories";
import Models from "./model";
import SectionHead from "../SectionHead/sectionhead";
import { useState } from "react";

const items = featuredmodel;

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

const FeaturedModel = () => {
  const [modelItems, setModelsItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

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
        <Models modelItems={modelItems} />

        <button className="featured-model-btn">Find models</button>
      </div>
    </>
  );
};

export default FeaturedModel;
