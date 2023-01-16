import React from "react";
import "./Blog.scss";
import BlogHeader from "./Components/BlogHeader/BlogHeader";
import { BlogItem2, BlogItem3 } from "./Components/BlogItem/BlogItem";
import { BlogMain2, BlogMain } from "./Components/BlogMain/BlogMain";
import { FiLoader } from "react-icons/fi";
const Blog = () => {
  return (
    <>
      <header className="blog-header">
        <BlogHeader />
      </header>
      <BlogMain />
      <BlogItem2 />
      <BlogMain2 style="blog-main2" />
      <BlogItem3 />
      <BlogMain2 style="blog-main2" />
      <footer className="blog-footer item-mtop">
        <button className="b-effect">
          Load More
          <FiLoader />
        </button>
      </footer>
    </>
  );
};

export default Blog;
