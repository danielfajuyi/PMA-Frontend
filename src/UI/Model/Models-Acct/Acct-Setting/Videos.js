import { useState } from "react";
import "./Videos.css";

function Videos({ userData }) {
  const { videos } = userData[0].profile;
  const [video, setVideo] = useState(videos);

  const [vid, setVid] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [toggleModal, setToggleModal] = useState(false);
  const [trashId, setTrashId] = useState("");

  function handleClick(action, id) {
    //playing video
    if (action === "view") {
      let selected = video.filter((item, index) =>
        index === id ? item : null
      );
      setActiveModal("display");

      setToggleModal((prev) => !prev);

      setVid(selected[0]);
    } else if (action === "trash") {
      //showing alert  before deleting

      setActiveModal("alert");

      setToggleModal((prev) => !prev);

      setTrashId(id);
    }
  }

  //deleting photo from the list
  function handleTrash(response) {
    if (response === "Yes") {
      setVideo(
        video.filter((item, index) => (index !== trashId ? item : null))
      );
      setToggleModal((prev) => !prev);
    } else if (response === "No") {
      setToggleModal((prev) => !prev);
    }
  }

  //handling change
  function handleChange(e) {
    const { files } = e.target;
    let vid = URL.createObjectURL(files[0]);

    setVideo((prev) => [...prev, vid]);
  }

  //handle save
  function handleSave(btn) {
    let x = {
      ...userData[0].profile,
      videos: video,
    };

    if (btn === "save") {
      console.log((userData[0].profile = x));
    } else {
      setVideo(videos);
      console.log(userData[0].profile);
    }
    btn === "save"
      ? console.log((userData[0].profile = x))
      : console.log(userData[0].profile);
  }

  return (
    <form className="content-container" onSubmit={(e) => e.preventDefault()}>
      <section
        style={{ transform: toggleModal && `translateX(${0}%)` }}
        className="modal-section"
      >
        {activeModal === "display" ? (
          <div className="modal-img-rapper">
            <i
              onClick={() => setToggleModal(false)}
              className="fa-solid fa-xmark close-alert2"
            ></i>
            <video className="video" width="320" height="240" controls>
              <source src={vid} type="video/mp4"></source> Your browser does not
              support the video tag.
            </video>
          </div>
        ) : activeModal === "alert" ? (
          <div className="alert-box">
            <h2 className="alert-title">
              Are you sure you want to delete Photo?
            </h2>

            <p className="alert-text">
              <span className="bold-text colored-text">Note: </span>
              by clicking yes and saving changes this photo will be permanently
              deleted from you Profile.
            </p>

            <div className="alert-btn">
              <button
                onClick={() => handleTrash("No")}
                className="del-alert-btn bold-text cancel-btn"
              >
                No?
              </button>
              <button
                onClick={() => handleTrash("Yes")}
                className="del-alert-btn bold-text yes-btn"
              >
                Yes?
              </button>
            </div>
          </div>
        ) : null}
      </section>

      {/* video content section */}

      <div className="set_sections-container">
        <h2 className="set_sections-title">Videos</h2>
        <p className="set_description">
          <i className="fa-solid fa-angles-right note"></i>
          Upload a 1 minute video reel staring you.
        </p>
        <p className="set_description">
          <i className="fa-solid fa-angles-right note"></i>
          This video is prominently displayed on your portfolio
        </p>
        <div className="add-video_container">
          <label className="add-video dark--btn on-hover" htmlFor="add-video">
            <i className="fa-solid fa-circle-plus add-icon"></i> Add video
          </label>
          <input
            onChange={handleChange}
            type="file"
            name=""
            id="add-video"
            className="file-input"
          />

          <span className="num-photo bold-text">{video.length}/18 vid</span>
        </div>
        <ul className="set_video-list">
          {video.map((item, index) => {
            return (
              <li className="set_video-item on-hover" key={index}>
                <video className="video" width="320" height="240" controls>
                  <source src={item} type="video/mp4"></source> Your browser
                  does not support the video tag.
                </video>
                <div className="video-icons">
                  <i
                    onClick={() => handleClick("view", index)}
                    className="fa-brands fa-youtube view-icon"
                  ></i>
                  <i
                    onClick={() => handleClick("trash", index)}
                    className="fa-regular fa-trash-can trash-icon"
                  ></i>
                </div>
              </li>
            );
          })}
        </ul>
        <span className="utility-btn on-hover">View All</span>
      </div>

      <section className="setting_btn-container">
        <button
          onClick={() => handleSave("discard")}
          className="discard-btn dark--btn bold-text on-hover"
        >
          Discard
        </button>
        <button
          style={{ backgroundColor: "#ff007a", color: "#fff" }}
          onClick={() => handleSave("save")}
          className="save-btn  bold-text on-hover"
        >
          Save
        </button>
      </section>
    </form>
  );
}

export default Videos;
