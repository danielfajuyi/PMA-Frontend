import "./Models-Kyc-Form-1.css";
import FormNavBtn from "./Form-nav-btn";
import { useEffect, useState } from "react";

function ModelsKycForm1({
  DomItems,
  collectData,
  handleNavigation,
  form1Data,
}) {
  const { info } = DomItems[0];

  //data state
  const [data, setData] = useState(form1Data);

  //State Error
  const [error, setError] = useState({
    profilePic: "",
    firstName: "",
    lastName: "",
    userName: "",
    gender: "",
    state: "",
    country: "",
    bio: "",
  });

  const [isError, setIsError] = useState(false);
  const [showError, setShowError] = useState(false);

  function handleChange(e) {
    const { name, value, files } = e.target;

    if (name === "profilePic") {
      const img = URL.createObjectURL(files[0]);
      setData((prevData) => ({ ...prevData, [name]: img }));
    } else {
      setData((prevData) => ({ ...prevData, [name]: value }));
    }
  }

  //setting error messages
  useEffect(() => {
    function handleError() {
      let errorText = "Please Fill out this field";

      data.profilePic === ""
        ? setError((prev) => ({ ...prev, profilePic: errorText }))
        : setError((prev) => ({ ...prev, profilePic: "" }));

      data.firstName === ""
        ? setError((prev) => ({ ...prev, firstName: errorText }))
        : setError((prev) => ({ ...prev, firstName: "" }));

      data.lastName === ""
        ? setError((prev) => ({ ...prev, lastName: errorText }))
        : setError((prev) => ({ ...prev, lastName: "" }));

      data.userName === ""
        ? setError((prev) => ({ ...prev, userName: errorText }))
        : setError((prev) => ({ ...prev, userName: "" }));

      data.gender === ""
        ? setError((prev) => ({ ...prev, gender: errorText }))
        : setError((prev) => ({ ...prev, gender: "" }));

      data.state === ""
        ? setError((prev) => ({ ...prev, state: errorText }))
        : setError((prev) => ({ ...prev, state: "" }));

      data.country === ""
        ? setError((prev) => ({ ...prev, country: errorText }))
        : setError((prev) => ({ ...prev, country: "" }));

      data.bio === ""
        ? setError((prev) => ({ ...prev, bio: errorText }))
        : setError((prev) => ({ ...prev, bio: "" }));
    }

    handleError();
  }, [data]);

  //checking for error message
  useEffect(() => {
    let err = false;
    if (
      error.profilePic ||
      error.firstName ||
      error.lastName ||
      error.userName ||
      error.gender ||
      error.state ||
      error.country ||
      error.bio
    ) {
      err = true;
    }

    setIsError(err);
  }, [error]);

  //submit and go to the next page
  function handleSubmit(text) {
    if (isError) {
      setShowError(true);
    } else {
      collectData(1, data);
      handleNavigation(text);
    }
  }

  return (
    <form className="kyc-form" onSubmit={(e) => e.preventDefault()}>
      <section className="kyc-hero">
        <img src="/images/kyc (1).jpg" alt="" />
        <div className="kyc-hero__text-rapper">
          <h2 className="kyc1-hero__title dark-text">Step-1</h2>
          <p className="kyc-hero__text dark-text">
            Setting Up Your Model Portfolio.
          </p>
        </div>
      </section>
      <section className="kyc-content-section">
        <div className="list-container">
          <div className="sections-container ">
            <div className="mobile-text">
              <h2 className="sections-title ">Profile Details</h2>
              <p className="description">
                <i className="fa-solid fa-angles-right point"></i>
                Include a well-lit headShort, generally framed between the top
                of your head to just below your shoulders.
              </p>
            </div>

            <div className="detail-container">
              <div className="img-rapper">
                <label className="upload-btn on-hover" htmlFor="profile-img">
                  <i className="fa-solid fa-plus fa-2x"></i>
                </label>
                <input
                  onChange={handleChange}
                  type="file"
                  name="profilePic"
                  id="profile-img"
                  className="file-input"
                />
                {data.profilePic && <img src={data.profilePic} alt="" />}
              </div>

              <div className="info-section__rapper">
                <div className="desktop-text">
                  <h2 className="sections-title ">Profile Details</h2>
                  <p className="description">
                    <i className="fa-solid fa-angles-right point"></i>
                    Include a well-lit headShort, generally framed between the
                    top of your head to just below your shoulders.
                  </p>
                </div>

                <ul className="info-section">
                  {info.map((item) => {
                    return (
                      <li className="kyc1-input-container" key={item.id}>
                        <label className="kyc1-input-label" htmlFor={item.id}>
                          {item.label}
                          <input
                            onChange={handleChange}
                            className="kyc1-input-field"
                            type={item.type}
                            id={item.id}
                            name={item.id}
                            placeholder={item.placeholder}
                            value={
                              item.id === "firstName"
                                ? data.firstName
                                : item.id === "lastName"
                                ? data.lastName
                                : item.id === "userName"
                                ? data.userName
                                : item.id === "gender"
                                ? data.gender
                                : item.id === "country"
                                ? data.country
                                : item.id === "state"
                                ? data.state
                                : null
                            }
                            required
                          />
                          {showError && (
                            <p className="sign-up-error-text">
                              {item.id === "firstName"
                                ? error.firstName
                                : item.id === "lastName"
                                ? error.lastName
                                : item.id === "userName"
                                ? error.userName
                                : item.id === "gender"
                                ? error.gender
                                : item.id === "country"
                                ? error.country
                                : item.id === "state"
                                ? error.state
                                : null}
                            </p>
                          )}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="sections-container">
            <h2 className="sections-title">Model Bio</h2>
            <p className="description">
              <i className="fa-solid fa-angles-right point"></i>
              Share a little about your self, including years of modeling
              experience, previous clients, etc.
            </p>
            <p className="description">
              <i className="fa-solid fa-angles-right point"></i>
              Don't be afraid to express your personality so you can stand out
              from the crowd.
            </p>
            <div className="bio-rapper">
              <textarea
                className="bio-text-area"
                onChange={handleChange}
                name="bio"
                id="bio"
                cols="30"
                rows="10"
                placeholder="wright out your Bio here..."
                value={data.bio}
                required
              ></textarea>
            </div>

            {showError && <p className="sign-up-error-text">{error.bio}</p>}
          </div>
          <div className="kyc-btn-container">
            <FormNavBtn
              btnText="Back"
              name="form1"
              handleClick={handleNavigation}
              type="button"
            />
            <FormNavBtn
              btnText="Next"
              name="form1"
              handleClick={handleSubmit}
              type="button"
            />
          </div>
        </div>
      </section>
    </form>
  );
}

export default ModelsKycForm1;
