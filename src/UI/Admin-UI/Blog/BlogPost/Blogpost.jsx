import React from "react";
import { BlogPostSlider } from "../BlogData";
import "./BlogPost.scss";

const Blogpost = () => {
  return (
    <div className=" Blogpost-container">
      <div className="Blogpost-wrapper">
        <section className="Header">
          {BlogPostSlider.map((blogpost) => {
            return (
              <div classname="post-title" key={blogpost.id}>
                <h1>{blogpost.title}</h1>
                <div className="post-description">
                  <img
                    src={blogpost.authorAvatar}
                    alt={blogpost.authorName}
                  ></img>
                  <div className="author"></div>
                </div>
              </div>
            );
          })}
        </section>

        <section className="Sidebar"></section>

        <section className="Main"></section>

        <section classname="Footer"></section>
      </div>
    </div>
  );
};

export default Blogpost;
