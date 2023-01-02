import "./Client-Kyc-Form-1.css";
import FormNavBtn from "./Form-nav-btn";
import { useEffect, useState } from "react";
import { Input1, Input2, Input3 } from "./kyc-input";

function ClientsKycForm1({
  DomItems,
  collectData,
  handleNavigation,
  form1Data,
}) {
  const { SocialMedia, Industry } = DomItems[0];

  //data state
  const [data, setData] = useState(form1Data);
  const [social, setSocial] = useState(data.socialMedia);

  const [industry, setIndustry] = useState(data.industry);
  const [toggleIndustry, setToggleIndustry] = useState(false);

  //State Error
  const [error, setError] = useState({
    name: "",
    url: "",
    address: "",
    state: "",
    country: "",
    bio: "",
    facebook: "",
    twitter: "",
    instagram: "",
    industry: "",
  });

  const [isError, setIsError] = useState(false);
  const [showError, setShowError] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "facebook" || name === "twitter" || name === "instagram") {
      setSocial((prevData) => ({ ...prevData, [name]: value }));
    } else {
      setData((prevData) => ({ ...prevData, [name]: value }));
    }
  }

  //handling industry choice
  function handleIndustry(option) {
    option !== "toggle" && setIndustry(option);
    setToggleIndustry((prev) => !prev);
  }
  //setting error messages
  useEffect(() => {
    function handleError() {
      let errorText = "This detail is required.!";
      let bioErr = "The Bio section is required.!";
      let industryErr = "Please choose an industry.!";
      let socialErr = "You social-media link is required.!";

      data.name === ""
        ? setError((prev) => ({ ...prev, name: errorText }))
        : setError((prev) => ({ ...prev, name: "" }));

      data.url === ""
        ? setError((prev) => ({ ...prev, url: errorText }))
        : setError((prev) => ({ ...prev, url: "" }));

      data.address === ""
        ? setError((prev) => ({ ...prev, address: errorText }))
        : setError((prev) => ({ ...prev, address: "" }));

      data.state === ""
        ? setError((prev) => ({ ...prev, state: errorText }))
        : setError((prev) => ({ ...prev, state: "" }));

      data.country === ""
        ? setError((prev) => ({ ...prev, country: errorText }))
        : setError((prev) => ({ ...prev, country: "" }));

      data.bio === ""
        ? setError((prev) => ({ ...prev, bio: bioErr }))
        : setError((prev) => ({ ...prev, bio: "" }));

      industry === ""
        ? setError((prev) => ({ ...prev, industry: industryErr }))
        : setError((prev) => ({ ...prev, industry: "" }));

      social.facebook === ""
        ? setError((prev) => ({ ...prev, facebook: socialErr }))
        : setError((prev) => ({ ...prev, facebook: "" }));

      social.twitter === ""
        ? setError((prev) => ({ ...prev, twitter: socialErr }))
        : setError((prev) => ({ ...prev, twitter: "" }));

      social.instagram === ""
        ? setError((prev) => ({ ...prev, instagram: socialErr }))
        : setError((prev) => ({ ...prev, instagram: "" }));
    }

    handleError();
  }, [data, social, industry]);

  //checking for error message
  useEffect(() => {
    let err = false;
    if (
      error.name ||
      error.url ||
      error.address ||
      error.state ||
      error.country ||
      error.bio ||
      error.facebook ||
      error.twitter ||
      error.instagram ||
      error.industry
    ) {
      err = true;
    } else {
      err = false;
    }

    setIsError(err);
  }, [error]);

  //submit and go to the next page
  function handleSubmit(text) {
    if (isError) {
      setShowError(true);
    } else {
      collectData(1, { ...data, socialMedia: social, industry: industry });
      handleNavigation(text);
    }
  }

  return (
    <form className="--kyc-form" onSubmit={(e) => e.preventDefault()}>
      <section className="--kyc-hero">
        <img src="/images/client_1.jpg" alt="" />
        <div className="--kyc-hero__text-rapper">
          <h2 className="--kyc-hero__title">Step-1</h2>
          <p className="--kyc-hero__text">Setting Up Your Portfolio.</p>
        </div>
      </section>

      {/* input/details section  */}

      <section className="--kyc-content-section">
        <div className="--list-container">
          <section className="--sections-container ">
            <h2 className="--sections-title">Profile Details</h2>
            <p className="--note-text">
              <i className="fa-solid fa-angles-right --points"></i>
              Let's get to know you better.!
            </p>
            <p className="--note-text">
              <i className="fa-solid fa-angles-right --points"></i>
              Fill out some basic info about your Brand.
            </p>

            <ul className="--info-section">
              {/* name input */}
              <Input1
                id="name"
                label="Brand Name"
                value={data.name}
                placeholder="Your Brand Name..."
                error={error.name}
                handleChange={handleChange}
                showError={showError}
              />

              {/* url input  */}
              <Input1
                id="url"
                label="Brand Url"
                value={data.url}
                placeholder="Brand Url..."
                error={error.url}
                handleChange={handleChange}
                showError={showError}
              />

              {/* address input */}
              <Input2
                id="address"
                label="Office Address"
                value={data.address}
                placeholder="Office Address..."
                error={error.address}
                handleChange={handleChange}
                showError={showError}
              />

              {/* country input */}
              <Input3
                id="country"
                label="Country"
                value={data.country}
                placeholder="Country..."
                error={error.country}
                handleChange={handleChange}
                showError={showError}
              />

              {/* state input */}
              <Input3
                id="state"
                label="State"
                value={data.state}
                placeholder="State..."
                error={error.state}
                handleChange={handleChange}
                showError={showError}
              />
            </ul>
          </section>

          {/* industry section */}

          <section className="--sections-container">
            <h2 className="--sections-title">Client's Industry</h2>
            <p className="--note-text">
              <i className="fa-solid fa-angles-right --points"></i>
              Pick an industry from the list of industries in the drop down.
            </p>
            <p className="--note-text">
              <i className="fa-solid fa-angles-right --points"></i>
              Please ensure that your chosen industry compliments your Brand.
            </p>
            <div className="industry-container">
              <button
                onClick={() => handleIndustry("toggle")}
                className="industry__btn --cancel-btn "
                type="button"
              >
                {industry ? `industry: ${industry}` : "Choose an industry"}
                <i
                  style={{ transform: toggleIndustry && `rotateX(${180}deg)` }}
                  className="fa-solid fa-angle-down"
                ></i>
              </button>
              {toggleIndustry && (
                <ul className="industry-list">
                  {Industry.map((item) => (
                    <li
                      key={item}
                      onClick={() => handleIndustry(item)}
                      className="industry-item "
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {showError && <p className="--error-text">{error.industry}</p>}
            </div>
          </section>

          {/* bio section */}

          <section className="--sections-container">
            <h2 className="--sections-title">Client's Bio</h2>
            <p className="--note-text">
              <i className="fa-solid fa-angles-right --points"></i>
              Share a little about your Brand, including years of experience,
              achievements etc.
            </p>
            <p className="--note-text">
              <i className="fa-solid fa-angles-right --points"></i>
              Include a credible and verifiable information so you can stand out
              from the crowd.
            </p>
            <div className="--bio-rapper">
              <textarea
                className="--bio-text-area"
                onChange={handleChange}
                name="bio"
                id="bio"
                cols="30"
                rows="10"
                placeholder="Brief information about your Brand..."
                value={data.bio}
                required
              ></textarea>
            </div>

            {showError && (
              <p className="--error-text --bio-error">{error.bio}</p>
            )}
          </section>

          {/* social media section */}

          <section className="--sections-container">
            <h2 className="--sections-title">Social Media Handles</h2>
            <ul className="--social-media-link">
              {SocialMedia.map((item) => {
                return (
                  <li className="--kyc-input-container" key={item.id}>
                    <label className="--kyc-input-label" htmlFor={item.id}>
                      <span className="--required-icon_rapper">
                        {item.label}
                        {error[item.id] === "" ? (
                          <i className="fa-solid fa-circle-check --valid-icon"></i>
                        ) : (
                          <i className="fa-solid fa-star --required-icon"></i>
                        )}
                      </span>
                      <input
                        onChange={handleChange}
                        className="--kyc-input-field"
                        type={item.type}
                        id={item.id}
                        name={item.id}
                        placeholder={item.placeholder}
                        value={social[item.id]}
                        required
                        spellCheck={false}
                      />
                      {showError && (
                        <p className="--error-text">{error[item.id]}</p>
                      )}
                    </label>
                  </li>
                );
              })}
            </ul>
          </section>

          <section className="--kyc-btn-container">
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
          </section>
        </div>
      </section>
    </form>
  );
}

export default ClientsKycForm1;
