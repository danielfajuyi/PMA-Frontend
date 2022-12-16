import React from "react";
import "./Blog.scss";
import BlogHeader from "./Components/BlogHeader/BlogHeader";
import { BlogItem2 } from "./Components/BlogItem/BlogItem";
import BlogMain from "./Components/BlogMain/BlogMain";

const Blog = () => {
  return (
    <>
      <header className="blog-header">
        <BlogHeader />
      </header>
      <BlogMain />
      <BlogItem2 />
    </>
  );
};

export default Blog;
