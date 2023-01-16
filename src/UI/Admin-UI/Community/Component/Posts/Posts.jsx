import React from "react";
import Post from "./Post/post";
import { PostsData } from "../../Commuintydata";

const Posts = () => {
  return (
    <div className="post-data">
      {PostsData.map((post) => {
        return <Post data={post} key={post.id} />;
      })}
    </div>
  );
};

export default Posts;
