import "./Models-Kyc-Form-3.css";
import FormNavBtn from "./Form-nav-btn";
import { useState } from "react";
import { useEffect } from "react";

function ModelsKycForm3({
  DomItems,
  collectData,
  handleNavigation,
  handleModal,
  form3Data,
}) {
  const { Photo, polaroid } = DomItems[0];

  const [photo, setPhoto] = useState(form3Data.photos);
  const [Polaroid, setPolaroid] = useState(form3Data.polaroids);
  const [compCard, setCompCard] = useState(form3Data.compCard);

  const [submit, setSubmit] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleChange(e) {
    const { id, name, files } = e.target;
    const img = URL.createObjectURL(files[0]);

    if (name === "photo") {
      setPhoto((prevData) => ({ ...prevData, [id]: img }));
    } else if (name === "polaroid") {
      setPolaroid((prevData) => ({ ...prevData, [id]: img }));
    } else if (name === "compCard") {
      setCompCard((prevData) => img);
    }
  }

  //setting error
  useEffect(() => {
    let err = false;
    if (
      photo.photo1 === "" ||
      photo.photo2 === "" ||
      photo.photo3 === "" ||
      photo.photo4 === "" ||
      photo.photo5 === "" ||
      photo.photo6 === ""
    ) {
      err = true;
    } else {
      err = false;
    }

    setIsError(err);
  }, [photo]);

  //handling submit
  function handleSubmit(text) {
    if (isError) {
      handleModal("add-photo");
    } else {
      setSubmit((prev) => !prev);
      collectData(3, {
        photos: photo,
        polaroids: Polaroid,
        compCard: compCard,
      });
      handleNavigation(text);

      setTimeout(() => {
        setSubmit((prev) => !prev);
      }, 1000);
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
            <p className="description">
              <i className="fa-solid fa-angles-right point"></i>
              Try to include a headShot, a side/profile shot,and a full body
              shot.
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

                    {photo[item.id] && <img src={photo[item.id]} alt="" />}
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

                    {Polaroid[item.id] && (
                      <img src={Polaroid[item.id]} alt="" />
                    )}
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
              submit={submit}
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
