import "./Agency-Kyc-Form-2.css";
import FormNavBtn from "./Form-nav-btn";
import { useState } from "react";
import { useEffect } from "react";

function AgencyKycForm2({
  DomItems,
  collectData,
  handleNavigation,
  handleModal,
  form2Data,
}) {
  const { Photo } = DomItems[0];

  const [photo, setPhoto] = useState(form2Data.photos);
  const [profilePic, setProfilePic] = useState(form2Data.profilePic);
  const [coverPic, setCoverPic] = useState(form2Data.coverPic);

  const [submit, setSubmit] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleChange(e) {
    const { id, name, files } = e.target;
    const img = URL.createObjectURL(files[0]);

    if (name === "profilePic") {
      setProfilePic(img);
    } else if (name === "photo") {
      setPhoto((prevData) => ({ ...prevData, [id]: img }));
    } else {
      setCoverPic(img);
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
      photo.photo6 === "" ||
      profilePic === ""
    ) {
      err = true;
    } else {
      err = false;
    }

    setIsError(err);
  }, [photo, profilePic]);

  //handling submit
  function handleSubmit(text) {
    if (isError) {
      handleModal("add-photo");
    } else {
      setSubmit((prev) => !prev);
      collectData(2, {
        profilePic: profilePic,
        photos: photo,
        coverPic: coverPic,
      });
      handleNavigation(text);

      setTimeout(() => {
        setSubmit((prev) => !prev);
      }, 1000);
    }
  }

  return (
    <form className="kyc--form" onSubmit={(e) => e.preventDefault()}>
      <section className="kyc--hero">
        <img src="/images/agent_3.jpg" alt="" />
        <div className="kyc--hero__text-rapper">
          <h2 className="kyc--hero__title">Finally</h2>
          <p className="kyc--hero__text">
            You Are Moments Away From Awesomeness!!
          </p>
        </div>
      </section>

      <section className="kyc--content-section">
        <div className="list--container">
          {/* profile pic */}

          <section className="detail--rapper">
            <div className="note-text-rapper">
              <h2 className="sections--title ">Profile Photo</h2>
              <p className="note-text">
                <i className="fa-solid fa-angles-right points"></i>
                Add a display picture for your dashboard.
              </p>
              <p className="note-text desktop-note">
                <i className="fa-solid fa-angles-right points"></i>
                Include a well-lit headShort.
              </p>

              <p className="note-text desktop-note">
                <i className="fa-solid fa-angles-right points"></i>
                Generally framed between top of your head to just below your
                shoulder.
              </p>
              <p className="note-text">
                <i className="fa-solid fa-angles-right points"></i>
                You can also make use of your Agency logo image or design
              </p>
            </div>
            <div className="img--rapper">
              <label className="upload--btn on-hover" htmlFor="profile-img">
                <i className="fa-solid fa-plus fa-2x"></i>
              </label>
              <input
                onChange={handleChange}
                type="file"
                name="profilePic"
                id="profile-img"
                className="file--input"
              />
              {profilePic && <img src={profilePic} alt="" />}
            </div>
          </section>

          {/* photo section */}

          <section className="sections--container">
            <h2 className="sections--title">Jobs Photo</h2>
            <p className="note-text">
              <i className="fa-solid fa-angles-right points"></i>
              Upload pictures of some of the modeling jobs done by your models!
            </p>
            <p className="set_description">
              <i className="fa-solid fa-angles-right points"></i>
              Try to include a headShot, a side/profile shot,and a full body
              shot.
            </p>

            <ul className="photo--list">
              {Photo.map((item) => {
                return (
                  <li className="photo--item" key={item.id}>
                    <label className="upload--btn on-hover" htmlFor={item.id}>
                      <i className="fa-solid fa-plus fa-2x"></i>
                    </label>
                    <input
                      onChange={handleChange}
                      type="file"
                      name="photo"
                      id={item.id}
                      className="file--input"
                    />

                    {photo[item.id] && <img src={photo[item.id]} alt="" />}
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Cover photo section  */}

          <section className="set__sections-container">
            <h2 className="set__sections-title">Cover Photo</h2>
            <p className="set_note-text">
              <i className="fa-solid fa-angles-right points"></i>
              Add a Cover Photo (optional).
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
              {coverPic && <img src={coverPic} alt="" />}
            </div>
          </section>

          <div className="kyc--btn-container">
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

export default AgencyKycForm2;
