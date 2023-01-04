import "./Models-Kyc-Form-3.css";
import FormNavBtn from "./Form-nav-btn";
import { useState } from "react";

function ModelsKycForm3({
  DomItems,
  collectData,
  handleNavigation,
  handleModal,
}) {
  const { Photo, polaroid } = DomItems[0];

  const [photo, setPhoto] = useState([]);
  const [Polaroid, setPolaroid] = useState([]);
  const [compCard, setCompCard] = useState("");

  function handleChange(e) {
    const { name, files } = e.target;
    const img = URL.createObjectURL(files[0]);

    if (name === "photo") {
      setPhoto((prevData) => [...prevData, img]);
    } else if (name === "polaroid") {
      setPolaroid((prevData) => [...prevData, img]);
    } else if (name === "compCard") {
      setCompCard((prevData) => img);
    }
  }

  function handleSubmit(text) {
    if (photo.length < 6) {
      handleModal("photo");
    } else {
      collectData(3, {
        photos: [...photo],
        polaroids: [...Polaroid],
        compCard: compCard,
      });
      handleNavigation(text);
    }
  }

  return (
    <form className="kyc-form" onSubmit={(e) => e.preventDefault()}>
      <section className="kyc-hero">
        <img src="/images/kyc (3).jpg" alt="" />
        <div className="kyc-hero__text-rapper">
          <h2 className="kyc-hero__title">Finally</h2>
          <p className="kyc-hero__text">
            You Are Moments Away From Awesomeness!!
          </p>
        </div>
      </section>

      <section className="kyc-content-section">
        <div className="list-container">
          <div className="sections-container">
            <h2 className="sections-title">Portfolio Photos</h2>
            <p className="description">
              <i className="fa-solid fa-angles-right point"></i>
              We recommend using a variety of high resolution photos that best
              show off your work!
            </p>

            <ul className="photo-list">
              {Photo.map((item) => {
                return (
                  <li className="photo-item" key={item.id}>
                    <label className="upload-btn on-hover" htmlFor={item.id}>
                      <i className="fa-solid fa-plus fa-2x"></i>
                    </label>
                    <input
                      onChange={handleChange}
                      type="file"
                      name="photo"
                      id={item.id}
                      className="file-input"
                    />

                    <img
                      src={
                        item.id === "photo1"
                          ? photo[0]
                          : item.id === "photo2"
                          ? photo[1]
                          : item.id === "photo3"
                          ? photo[2]
                          : item.id === "photo4"
                          ? photo[3]
                          : item.id === "photo5"
                          ? photo[4]
                          : item.id === "photo6"
                          ? photo[5]
                          : null
                      }
                      alt=""
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="sections-container">
            <h2 className="sections-title">Polaroid</h2>
            <p className="description">
              <i className="fa-solid fa-angles-right point"></i>
              Polaroid are natural un-retouched photographs with minimal makeup.
            </p>
            <p className="description">
              <i className="fa-solid fa-angles-right point"></i>
              They should be taken in a well-lit space, with a clean (preferable
              white) background.
            </p>
            <p className="description">
              <i className="fa-solid fa-angles-right point"></i>
              Try to include a headShot, a side/profile shot,and a full body
              shot.
            </p>
            <ul className="polaroid-list">
              {polaroid.map((item) => {
                return (
                  <li className="polaroid-item" key={item.id}>
                    <label className="upload-btn on-hover" htmlFor={item.id}>
                      <i className="fa-solid fa-plus fa-2x"></i>
                    </label>
                    <input
                      onChange={handleChange}
                      type="file"
                      name="polaroid"
                      id={item.id}
                      className="file-input"
                    />

                    <img
                      src={
                        item.id === "pola1"
                          ? Polaroid[0]
                          : item.id === "pola2"
                          ? Polaroid[1]
                          : item.id === "pola3"
                          ? Polaroid[2]
                          : item.id === "pola4"
                          ? Polaroid[3]
                          : item.id === "pola5"
                          ? Polaroid[4]
                          : item.id === "pola6"
                          ? Polaroid[5]
                          : null
                      }
                      alt=""
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="sections-container">
            <h2 className="sections-title">Comp Card</h2>
            {compCard && <img className="compCard-img" src={compCard} alt="" />}
            <input
              onChange={handleChange}
              type="file"
              id="compCard"
              name="compCard"
              className="colored-hover"
            />
          </div>

          <div className="kyc-btn-container">
            <FormNavBtn
              btnText="Back"
              name="form3"
              handleClick={handleNavigation}
              type="button"
            />
            <FormNavBtn
              btnText="Submit"
              name="form3"
              handleClick={handleSubmit}
              type="submit"
            />
          </div>
        </div>
      </section>
    </form>
  );
}

export default ModelsKycForm3;
