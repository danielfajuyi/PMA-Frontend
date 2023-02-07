import { useState } from "react";
import "./Photos.css";

function Photos({ userData, handleModal, resetDiscard }) {
  const { photos, polaroids, compCard } = userData[0].profile;

  const [photo, setPhoto] = useState(photos);
  const [polaroid, setPolaroid] = useState(polaroids);
  const [card, setCard] = useState(compCard);
  const [viewAll, setViewAll] = useState({ photo: false, polaroid: false });

  const [image, setImage] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [toggleModal, setToggleModal] = useState(false);
  const [trash, setTrash] = useState({ section: "", id: "" });

  //Setting state and viewing photos
  function handleClick(action, id, section) {
    if (section === "photo") {
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

          setTrash({ section: section, id: id });
        }
      }
    } else if (section === "polaroid") {
      //viewing polaroid photos
      if (action === "view") {
        let selected = polaroid.filter((item, index) =>
          index === id ? item : null
        );

        setActiveModal("display");

        setToggleModal((prev) => !prev);

        setImage(selected[0]);
      } else if (action === "trash") {
        //checking if delete limit has been exceeded
        if (polaroid.length <= 3) {
          handleModal("trash-polaroid");
        } else {
          setActiveModal("alert");

          setToggleModal((prev) => !prev);

          setTrash({ section: section, id: id });
        }
      }
    }
  }

  //deleting photo from the list
  function handleTrash(response) {
    if (response === "Yes") {
      if (trash.section === "photo") {
        setPhoto(
          photo.filter((item, index) => (index !== trash.id ? item : null))
        );
        setToggleModal((prev) => !prev);
      } else if (trash.section === "polaroid") {
        setPolaroid(
          polaroid.filter((item, index) => (index !== trash.id ? item : null))
        );
        setToggleModal((prev) => !prev);
      }
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
    } else if (name === "polaroid") {
      setPolaroid((prev) => [...prev, img]);
    } else if (name === "card") {
      setCard(img);
    }
  }

  //handle save
  function handleSave(btn) {
    let x = {
      ...userData[0].profile,
      photos: photo,
      polaroids: polaroid,
      compCard: card,
    };

    if (btn === "save") {
      console.log((userData[0].profile = x));
      handleModal("save");
    } else {
      setPhoto(photos);
      setPolaroid(polaroids);
      setCard(compCard);
      console.log(userData[0].profile);
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
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
            <img src={image} alt="" width="300" height="320" />
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
      {/* content section */}
      <section className="content-container">
        <div className="set_sections-container">
          <h2 className="set_sections-title">Portfolio Photos</h2>
          <p className="set_description">
            <i className="fa-solid fa-angles-right note"></i>
            We recommend using a variety of high resolution photos that best
            show off your work!
          </p>
          <p className="set_description">
            <i className="fa-solid fa-angles-right note"></i>
            Try to include a headShot, a side/profile shot,and a full body shot.
          </p>
          <div className="add-photo_container">
            <label
              className="add-photo dark--btn cancel-btn"
              htmlFor="add-photo"
            >
              <i className="fa-solid fa-circle-plus add-icon"></i> Add photo
            </label>

            <input
              onChange={handleChange}
              type="file"
              name="photo"
              id="add-photo"
              className="file-input"
            />

            <span className="num-photo bold-text">{photo.length}/18 pics</span>
          </div>
          <ul className="set_photo-list">
            {photo.map((item, index) =>
              viewAll.photo ? (
                <li className="set_photo-item on-hover" key={index}>
                  <img src={item} alt="" />
                  <div className="photo-icons">
                    <i
                      onClick={() => handleClick("view", index, "photo")}
                      className="fa-solid fa-arrow-up-right-from-square view-icon"
                    ></i>
                    <i
                      onClick={() => handleClick("trash", index, "photo")}
                      className="fa-regular fa-trash-can trash-icon"
                    ></i>
                  </div>
                </li>
              ) : (
                index <= 5 && (
                  <li className="set_photo-item on-hover" key={index}>
                    <img src={item} alt="" />
                    <div className="photo-icons">
                      <i
                        onClick={() => handleClick("view", index, "photo")}
                        className="fa-solid fa-arrow-up-right-from-square view-icon"
                      ></i>
                      <i
                        onClick={() => handleClick("trash", index, "photo")}
                        className="fa-regular fa-trash-can trash-icon"
                      ></i>
                    </div>
                  </li>
                )
              )
            )}
          </ul>
          <span
            onClick={() =>
              setViewAll((prev) => ({ ...prev, photo: !viewAll.photo }))
            }
            className="utility-btn cancel-btn"
          >
            {viewAll.photo ? " View Less" : "View All"}
          </span>
        </div>
        <div className="set_sections-container">
          <h2 className="set_sections-title">Polaroid</h2>
          <p className="set_description">
            <i className="fa-solid fa-angles-right note"></i>
            Polaroid are natural un-retouched photographs with minimal makeup.
          </p>
          <p className="set_description">
            <i className="fa-solid fa-angles-right note"></i>
            They should be taken in a well-lit space, with a clean (preferable
            white) background.
          </p>
          <p className="set_description">
            <i className="fa-solid fa-angles-right note"></i>
            Try to include a headShot, a side/profile shot,and a full body shot.
          </p>

          <div className="add-polaroid_container">
            <label
              className="add-polaroid dark--btn cancel-btn"
              htmlFor="add-polaroid"
            >
              <i className="fa-solid fa-circle-plus add-icon"></i> Add polaroid
            </label>

            <input
              onChange={handleChange}
              type="file"
              name="polaroid"
              id="add-polaroid"
              className="file-input"
            />

            <span className="bold-text">{polaroid.length}/18 pics</span>
          </div>
          <ul className="set_polaroid-list">
            {polaroid.map((item, index) =>
              viewAll.polaroid
                ? item && (
                    <li className="set_polaroid-item on-hover" key={index}>
                      <img src={item} alt="" />
                      <div className="photo-icons">
                        <i
                          onClick={() => handleClick("view", index, "polaroid")}
                          className="fa-solid fa-arrow-up-right-from-square view-icon"
                        ></i>
                        <i
                          onClick={() =>
                            handleClick("trash", index, "polaroid")
                          }
                          className="fa-regular fa-trash-can trash-icon"
                        ></i>
                      </div>
                    </li>
                  )
                : item &&
                  index <= 5 && (
                    <li className="set_polaroid-item on-hover" key={index}>
                      <img src={item} alt="" />
                      <div className="photo-icons">
                        <i
                          onClick={() => handleClick("view", index, "polaroid")}
                          className="fa-solid fa-arrow-up-right-from-square view-icon"
                        ></i>
                        <i
                          onClick={() =>
                            handleClick("trash", index, "polaroid")
                          }
                          className="fa-regular fa-trash-can trash-icon"
                        ></i>
                      </div>
                    </li>
                  )
            )}
          </ul>
          <span
            onClick={() =>
              setViewAll((prev) => ({ ...prev, polaroid: !viewAll.polaroid }))
            }
            className="utility-btn cancel-btn"
          >
            {viewAll.polaroid ? " View Less" : "View All"}
          </span>
        </div>

        <div className="set_sections-container ">
          <h2 className="set_sections-title">Comp Card</h2>
          {card && <img className="card-img" src={card} alt="" />}
          <input
            className="colored-hover"
            onChange={handleChange}
            type="file"
            id=""
            name="card"
          />
        </div>
        {/* button section  */}

        <section className="setting_btn-container">
          <button
            onClick={() => resetDiscard(() => handleSave)}
            className="discard-btn dark--btn bold-text cancel-btn"
          >
            Discard
          </button>
          <button
            onClick={() => handleSave("save")}
            className="save-btn  bold-text yes-btn"
          >
            Save
          </button>
        </section>
      </section>
    </form>
  );
}

export default Photos;
