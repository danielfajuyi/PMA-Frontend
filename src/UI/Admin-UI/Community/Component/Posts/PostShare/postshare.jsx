import React, { useState, useRef } from "react";
import "./postshare.scss";

import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <>
      <div className="post-header">
        <div className="post-input">
          <img
            src="./images/community/top-profile/profile1.png"
            alt=""
            className="post-profile"
          />
          <div>
            <input
              type="text"
              className="placeholder"
              placeholder="What's on your mind?"
            ></input>
            <div className="post-options">
              <div
                className="option"
                style={{ color: "var(--photo)" }}
                onClick={() => imageRef.current.click()}
              >
                <UilScenery />
                Photo
              </div>

              <div className="option" style={{ color: "var(--video)" }}>
                <UilPlayCircle />
                Video
              </div>

              <div className="option" style={{ color: "var(--location)" }}>
                <UilLocationPoint />
                Location
              </div>

              <div className="option" style={{ color: "var(--shedule)" }}>
                <UilSchedule />
                Shedule
              </div>
              <button className="community-btn postshare-btn">Post</button>
              <div style={{ display: "none" }}>
                <input
                  type="file"
                  name="myImage"
                  ref={imageRef}
                  onChange={onImageChange}
                />
              </div>
            </div>
            {image && (
              <div className="previewImage">
                <UilTimes onClick={() => setImage(null)} />
                <img src={image.image} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostShare;
