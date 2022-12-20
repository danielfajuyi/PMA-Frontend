import React from "react";
import "./post.scss";

const Post = ({ data }) => {
  return (
    <div className="Post-Main">
      <div className="post-info">
        <div className="post-left">
          <img src={data.profilepics} alt="" />
          <div className="post-name_time-wrapper">
            <h2>{data.name}</h2>
            <div className="post-time">
              <img src={data.timeicon} alt="" />
              <span>{data.time}</span>
            </div>
          </div>
        </div>

        <div className="post-right">
          <img src={data.moresettings} alt=""></img>
          <div>
            <img src={data.message} alt=""></img>
            <img src={data.follow} alt=""></img>
          </div>
        </div>
      </div>

      <div className="post-description">
        <p>{data.desc}</p>
        <div className="post-image">
          <img src={data.postimg} alt=""></img>
        </div>
      </div>

      <div className="post-icons">
        <div className="post-icon-left">
          <div className="post-icon">
            <img src={data.liked ? data.like : data.likedpng} alt=""></img>
            <span>{data.numberOfLikes}</span>
          </div>
          <div className="post-icon">
            <img src={data.love} alt=""></img>
            <span>{data.numberOfLoves}</span>
          </div>
          <div className="post-icon">
            <img src={data.comment} alt=""></img>
            <span>Comments</span>
            <span>{data.numberOfComments}</span>
          </div>
        </div>
        <div className="post-icon-right">
          <img src={data.view} alt=""></img>
          <span>Views</span>
          <span>{data.numberOfViews}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
