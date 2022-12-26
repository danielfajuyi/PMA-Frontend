import { useEffect, useState } from "react";
import "./About.css";
import EditBtn from "./Edit-btn";
import { Input1, Input2, Input3 } from "./set--kyc-input";

function About({
  DomItems,
  handleActiveEdit,
  activeEdit,
  userData,
  resetDiscard,
  handleModal,
}) {
  const { SocialMedia, Industry } = DomItems[0];

  //data state
  const [data, setData] = useState(userData[0].profile);

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
    industry: "",
    facebook: "",
    twitter: "",
    instagram: "",
  });

  const [isError, setIsError] = useState(false);

  //handling changes
  function handleChange(e) {
    const { name, value, files } = e.target;

    if (name === "profilePic") {
      const img = URL.createObjectURL(files[0]);
      setData((prevData) => ({ ...prevData, [name]: img }));
    } else if (
      name === "facebook" ||
      name === "twitter" ||
      name === "instagram"
    ) {
      setSocial((prevData) => ({ ...prevData, [name]: value }));
    } else {
      setData((prevData) => ({ ...prevData, [name]: value }));
    }
  }

  //handling industry choices

  function handleIndustry(option) {
    option !== "toggle" && setIndustry(option);
    setToggleIndustry((prev) => !prev);
  }

  //setting error messages
  useEffect(() => {
    function handleError() {
      let errorText = "This detail is required!";
      let bioErr = "The Bio section is required!";
      let industryErr = "Please choose an industry!";
      let socialErr = "You social-media link is required";
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
      error.profilePic ||
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

  //handle save
  function handleSave(btn) {
    let x = {
      ...userData[0].profile,
      profilePic: data.profilePic,
      name: data.name,
      url: data.url,
      address: data.address,
      state: data.state,
      country: data.country,
      bio: data.bio,
      industry: industry,
      socialMedia: social,
    };

    if (btn === "save") {
      console.log((userData[0].profile = x));
      handleModal("save");
    } else {
      setData(userData[0].profile);
      handleActiveEdit(activeEdit, "Done");
      console.log(userData[0].profile);
    }
  }

  return (
    <form className="--content-container" onSubmit={(e) => e.preventDefault()}>
      {/* profile detail section */}

      <div className="--set_sections-container ">
        {/* mobile text */}

        <div className="--set_mobile-text">
          <div className="--set_sections-title-rapper">
            <h2 className="--set_sections-title ">Profile Details</h2>
            <EditBtn
              btnText={activeEdit === "profile-details" ? "Done" : "Edit"}
              section="profile-details"
              handleActiveEdit={handleActiveEdit}
              isError={isError}
            />
          </div>

          {activeEdit === "profile-details" && (
            <p className="--set_note-text">
              <i className="fa-solid fa-angles-right --points"></i>
              Add a display picture for your dashboard.
            </p>
          )}
        </div>

        <div className="--set_detail-container">
          {/* profile read only  img */}

          {activeEdit !== "profile-details" && (
            <div className="--set_img-rapper">
              <img src={data.profilePic} alt="" />
            </div>
          )}

          {/* profile edit img */}

          {activeEdit === "profile-details" && (
            <div className="--set_img-rapper">
              <label
                className="--set_upload-btn on-hover"
                htmlFor="set_profile-img"
              >
                <i className="fa-solid fa-plus fa-2x"></i>
              </label>
              <input
                onChange={handleChange}
                type="file"
                name="profilePic"
                id="set_profile-img"
                className="--file-input"
              />
              <img src={data.profilePic} alt="" />
            </div>
          )}

          <div className="--set-info-rapper">
            {/* desktop text */}

            <div className="--set_desktop-text">
              <div className="--set_sections-title-rapper">
                <h2 className="--set_sections-title ">Profile Details</h2>
                <EditBtn
                  btnText={activeEdit === "profile-details" ? "Done" : "Edit"}
                  section="profile-details"
                  handleActiveEdit={handleActiveEdit}
                  isError={isError}
                />
              </div>

              {activeEdit === "profile-details" && (
                <p className="--set_note-text">
                  <i className="fa-solid fa-angles-right --points"></i>
                  Add a display picture for your dashboard.
                </p>
              )}
            </div>

            {/* profile edit section */}

            {activeEdit === "profile-details" && (
              <ul className="--set_info-section">
                {/* name input */}
                <Input1
                  id="name"
                  label="Brand Name"
                  value={data.name}
                  placeholder="Your Brand Name..."
                  error={error.name}
                  handleChange={handleChange}
                />

                {/* url input  */}
                <Input1
                  id="url"
                  label="Brand Url"
                  value={data.url}
                  placeholder="https://brand-url.com"
                  error={error.url}
                  handleChange={handleChange}
                />

                {/* address input */}
                <Input2
                  id="address"
                  label="Address"
                  value={data.address}
                  placeholder="Client Address..."
                  error={error.address}
                  handleChange={handleChange}
                />

                {/* country input */}
                <Input3
                  id="country"
                  label="Country"
                  value={data.country}
                  placeholder="Client Country..."
                  error={error.country}
                  handleChange={handleChange}
                />

                {/* state input */}
                <Input3
                  id="state"
                  label="State"
                  value={data.state}
                  placeholder="Client State..."
                  error={error.state}
                  handleChange={handleChange}
                />
              </ul>
            )}

            {/* profile read only section  */}
            {activeEdit !== "profile-details" && (
              <ul className="--set_info-text-container">
                <li>
                  <span className="bold-text">Brand Name: </span>
                  {data.name}
                </li>
                <li>
                  <span className="bold-text "> Brand Url: </span>
                  <span className="--url">{data.url}</span>
                </li>
                <li>
                  <span className="bold-text">Address: </span>
                  {data.address}
                </li>

                <li>
                  <span className="bold-text">Country: </span>
                  {data.country}
                </li>
                <li>
                  <span className="bold-text">State: </span>
                  {data.state}
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* industry section  */}

      <div className="--set_sections-container">
        <div className="--set_sections-title-rapper">
          <h2 className="--set_sections-title">Client's Industry</h2>
          <EditBtn
            btnText={activeEdit === "client-industry" ? "Done" : "Edit"}
            section="client-industry"
            handleActiveEdit={handleActiveEdit}
            isError={isError}
          />
        </div>

        {activeEdit === "client-industry" && (
          <p className="--set_note-text">
            <i className="fa-solid fa-angles-right --points"></i>
            Pick an industry from the list of industries in the drop down.
          </p>
        )}
        {activeEdit === "client-industry" && (
          <p className="--set_note-text">
            <i className="fa-solid fa-angles-right --points"></i>
            Please ensure that your chosen industry compliments your Brand.
          </p>
        )}

        {/* industry edit section  */}

        {activeEdit === "client-industry" && (
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
            <p className="--error-text">{error.industry}</p>
          </div>
        )}

        {/* industry read only section  */}

        {activeEdit !== "client-industry" && (
          <p className="industry-text">
            <span className="bold-text">client industry: </span> {industry}
          </p>
        )}
      </div>

      {/* client bio section  */}

      <div className="--set_sections-container">
        <div className="--set_sections-title-rapper">
          <h2 className="--set_sections-title">Client's Bio</h2>
          <EditBtn
            btnText={activeEdit === "client-bio" ? "Done" : "Edit"}
            section="client-bio"
            handleActiveEdit={handleActiveEdit}
            isError={isError}
          />
        </div>

        {activeEdit === "client-bio" && (
          <p className="--set_note-text">
            <i className="fa-solid fa-angles-right --points"></i>
            Share a little about your Brand, including years of experience,
            achievements etc.
          </p>
        )}
        {activeEdit === "client-bio" && (
          <p className="--set_note-text">
            <i className="fa-solid fa-angles-right --points"></i>
            Include a credible and verifiable information so you can stand out
            from the crowd.
          </p>
        )}

        {/* bio edit section  */}

        {activeEdit === "client-bio" && (
          <div>
            <div className="--set_bio-rapper">
              <textarea
                className="--set_bio-text-area"
                onChange={handleChange}
                name="bio"
                id="bio"
                cols="30"
                rows="10"
                value={data.bio}
                required
              ></textarea>
            </div>
            <p className="--error-text">{error.bio}</p>
          </div>
        )}

        {/* bio read only section  */}

        {activeEdit !== "client-bio" && (
          <p className="--set_bio-text">{data.bio}</p>
        )}
      </div>

      {/* social media section */}

      <div className="--set_sections-container">
        <div className="--set_sections-title-rapper">
          <h2 className="--set_sections-title">Social Media Handles</h2>
          <EditBtn
            btnText={activeEdit === "social-media" ? "Done" : "Edit"}
            section="social-media"
            handleActiveEdit={handleActiveEdit}
            isError={isError}
          />
        </div>
        {/* social-media  read only section */}
        {activeEdit !== "social-media" && (
          <ul className="--set_social-list">
            <li className="--social-item">{social.facebook}</li>
            <li className="--social-item">{social.twitter}</li>
            <li className="--social-item">{social.instagram}</li>
          </ul>
        )}
        {/* social-media  edit section */}
        {activeEdit === "social-media" && (
          <ul className="--set_social-media-link">
            {SocialMedia.map((item) => {
              return (
                <li className="--set_input-container" key={item.id}>
                  <label className="--set_input-label" htmlFor={item.id}>
                    {item.label}
                    <input
                      onChange={handleChange}
                      className="--set_input-field"
                      type={item.type}
                      id={item.id}
                      name={item.id}
                      placeholder={item.placeholder}
                      value={social[item.id]}
                      required
                      spellCheck={false}
                    />

                    <p className="--error-text">{error[item.id]}</p>
                  </label>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* btn section  */}

      <section className="--setting_btn-container">
        <button
          onClick={() => resetDiscard(() => handleSave)}
          className="--discard-btn  bold-text --cancel-btn"
          type="button"
        >
          Discard
        </button>
        <button
          style={{
            backgroundColor: activeEdit !== "Done" && "#bbbb",
          }}
          disabled={activeEdit !== "Done" && true}
          onClick={() => handleSave("save")}
          className="--save-btn  bold-text --yes-btn"
        >
          Save
        </button>
      </section>
    </form>
  );
}

export default About;
