import { useState } from "react";
import "./Jobs.css";
import JobItem from "./JobItem";

function Photos({ userData, handleModal, resetDiscard }) {
  const { photos, coverPic } = userData[0].profile;

  const [photo, setPhoto] = useState(photos);
  const [cover, setCover] = useState(coverPic);

  const [viewAll, setViewAll] = useState(false);

  const [image, setImage] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [toggleModal, setToggleModal] = useState(false);
  const [trashId, setTrashId] = useState("");

  //Setting state and viewing photos
  function handleClick(action, id) {
    //viewing photos
    if (action === "view") {
      let selected = photo.filter((item, index) =>
        index === id ? item : null
      );
      setActiveModal("display");

      setToggleModal((prev) => !prev);

      setImage(selected[0]);
    } else if (action === "trash") {
      //checking if photo delete limit has been exceeded
      if (photo.length <= 6) {
        handleModal("trash-photo");
      } else {
        setActiveModal("alert");

        setToggleModal((prev) => !prev);

        setTrashId(id);
      }
    }
  }

  //deleting photo from the list
  function handleTrash(response) {
    if (response === "Yes") {
      setPhoto(
        photo.filter((item, index) => (index !== trashId ? item : null))
      );
      setToggleModal((prev) => !prev);
    } else if (response === "No") {
      setToggleModal((prev) => !prev);
    }
  }

  //handle change and adding photos

  function handleChange(e) {
    const { name, files } = e.target;
    let img = URL.createObjectURL(files[0]);

    if (name === "photo") {
      setPhoto((prev) => [...prev, img]);
    } else {
      setCover(img);
    }
  }

  //handle save
  function handleSave(btn) {
    let x = {
      ...userData[0].profile,
      photos: photo,
      coverPic: cover,
    };

    if (btn === "save") {
      console.log((userData[0].profile = x));
      handleModal("save");
    } else {
      setPhoto(photos);
      console.log(userData[0].profile);
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <section
        style={{ transform: toggleModal && `translateX(${0}%)` }}
        className="modal--section"
      >
        {activeModal === "display" ? (
          <div className="modal--img-rapper">
            <i
              onClick={() => setToggleModal(false)}
              className="fa-solid fa-xmark close--alert"
            ></i>
            <img src={image} alt="" width="300" height="320" />
          </div>
        ) : activeModal === "alert" ? (
          <div className="alert--box">
            <h2 className="alert--title">
              Are you sure you want to delete Photo?
            </h2>

            <p className="alert--text">
              <span className="bold-text colored-text">Note: </span>
              by clicking Yes and Saving changes this photo will be permanently
              deleted from you Profile.
            </p>

            <div className="alert--btn">
              <button
                onClick={() => handleTrash("No")}
                className="del-alert--btn bold-text cancel--btn"
              >
                No?
              </button>
              <button
                onClick={() => handleTrash("Yes")}
                className="del-alert--btn bold-text yes--btn"
              >
                Yes?
              </button>
            </div>
          </div>
        ) : null}
      </section>
      {/* content section */}
      <section className="content--container">
        <div className="set__sections-container">
          <h2 className="set__sections-title">Jobs Photos</h2>
          <p className="set_note-text">
            <i className="fa-solid fa-angles-right points"></i>
            We recommend using a variety of high resolution photos that best
            show off your work!
          </p>
          <p className="set_note-text">
            <i className="fa-solid fa-angles-right points"></i>
            Try to include a headShot, a side/profile shot,and a full body shot.
          </p>
          <div className="add--photo_container">
            <label
              className="add--photo dark--btn cancel--btn"
              htmlFor="add-photo"
            >
              <i className="fa-solid fa-circle-plus add--icon"></i> Add photo
            </label>

            <input
              onChange={handleChange}
              type="file"
              name="photo"
              id="add-photo"
              className="file--input"
            />

            <span className=" bold-text">{photo.length}/18 pics</span>
          </div>
          <ul className="set_photo--list">
            {photo.map((item, index) =>
              viewAll ? (
                <JobItem
                  key={index}
                  item={item}
                  index={index}
                  handleClick={handleClick}
                />
              ) : (
                index <= 5 && (
                  <JobItem
                    key={index}
                    item={item}
                    index={index}
                    handleClick={handleClick}
                  />
                )
              )
            )}
          </ul>
          <span
            onClick={() => setViewAll((prev) => !prev)}
            className="view-all--btn cancel--btn"
          >
            {viewAll ? " View Less" : "View All"}
          </span>
        </div>

        {/* Cover photo section  */}

        <section className="set__sections-container">
          <h2 className="set__sections-title">Cover Photo</h2>
          <p className="set_note-text">
            <i className="fa-solid fa-angles-right points"></i>
            Add a Cover Photo.
          </p>
          <p className="set_note-text">
            <i className="fa-solid fa-angles-right points"></i>
            You can also make use Brand logo design Or Banner
          </p>
          <div className="cover-img-rapper">
            <label className="cover-upload-btn on-hover" htmlFor="cover-img">
              <i className="fa-solid fa-plus fa-2x"></i>
            </label>
            <input
              onChange={handleChange}
              type="file"
              name="cover-img"
              id="cover-img"
              className="file--input"
            />
            {cover && <img src={cover} alt="" />}
          </div>
        </section>

        {/* button section  */}

        <section className="setting_btn--container">
          <button
            onClick={() => resetDiscard(() => handleSave)}
            className="discard--btn dark--btn bold-text cancel--btn"
          >
            Discard
          </button>
          <button
            //style={{ backgroundColor: "#ff007a", color: "#fff" }}
            onClick={() => handleSave("save")}
            className="save--btn  bold-text yes--btn"
          >
            Save
          </button>
        </section>
      </section>
    </form>
  );
}

export default Photos;
