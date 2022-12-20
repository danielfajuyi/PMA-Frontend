import React from "react";
import { BlogData } from "../../BlogData.js";
import BlogCategories from "../../BlogCategories";
import { BlogItem } from "../BlogItem/BlogItem.jsx";

import { useState } from "react";
import "./BlogMain.scss";

const items = BlogData;

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

const BlogMain = () => {
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

export default BlogMain;
