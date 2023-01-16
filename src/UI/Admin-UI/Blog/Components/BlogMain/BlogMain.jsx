import React from "react";
import { BlogPostCarousel } from "../../BlogData.js";
import BlogCategories from "../../BlogCategories";
import { BlogItem } from "../BlogItem/BlogItem.jsx";

import { useState } from "react";
import "./BlogMain.scss";

const items = BlogPostCarousel;

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

export const BlogMain = () => {
  const [blogItems, setBlogItems] = useState(items);
  const [
    categories,

    /*setCategories */
  ] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "All") {
      setBlogItems(items);
      return;
    }

    const newItem = items.filter((item) => item.category === category);
    setBlogItems(newItem);
  };

  return (
    <>
      <section className="blog-main container">
        <BlogCategories categories={categories} filterItems={filterItems} />

        <BlogItem blogItems={blogItems} />
      </section>
    </>
  );
};

export const BlogMain2 = ({ style }) => {
  const [blogItems, setBlogItems] = useState(items);
  const [
    categories,

    /*setCategories */
  ] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "All") {
      setBlogItems(items);
      return;
    }

    const newItem = items.filter((item) => item.category === category);
    setBlogItems(newItem);
  };

  return (
    <>
      <section className={`blog-main container ${style}`}>
        <BlogItem blogItems={blogItems} />
      </section>
    </>
  );
};
