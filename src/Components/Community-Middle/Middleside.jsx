import React from "react";
import "./Middleside.css";
import { PostData } from "../../data";
import Post from "../PostData/postdata";
import PostShare from "../PostShare/postshare";

const Middleside = () => {
  return (
    <>
      <section className="community-middle">
        <PostShare />

        <article>
          <div className="post-data">
            {PostData.map((post, id) => {
              return (
                <>
                  <Post data={post} id={id} />
                </>
              );
            })}
          </div>
        </article>
      </section>
    </>
  );
};

export default Middleside;
