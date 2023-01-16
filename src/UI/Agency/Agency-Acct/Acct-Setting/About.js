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
  const { SocialMedia } = DomItems[0];

  //data state
  const [data, setData] = useState(userData[0].profile);

  const [social, setSocial] = useState(data.socialMedia);

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

  //setting error messages
  useEffect(() => {
    function handleError() {
      let errorText = "This detail is required!";

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
        ? setError((prev) => ({ ...prev, bio: errorText }))
        : setError((prev) => ({ ...prev, bio: "" }));

      social.facebook === ""
        ? setError((prev) => ({ ...prev, facebook: errorText }))
        : setError((prev) => ({ ...prev, facebook: "" }));

      social.twitter === ""
        ? setError((prev) => ({ ...prev, twitter: errorText }))
        : setError((prev) => ({ ...prev, twitter: "" }));

      social.instagram === ""
        ? setError((prev) => ({ ...prev, instagram: errorText }))
        : setError((prev) => ({ ...prev, instagram: "" }));
    }

    handleError();
  }, [data, social]);

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
      error.instagram
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
    <form className="content--container" onSubmit={(e) => e.preventDefault()}>
      {/* profile detail section */}

      <div className="set__sections-container ">
        {/* mobile text */}

        <div className="set_mobile--text">
          <div className="set__sections-title-rapper">
            <h2 className="set__sections-title ">Profile Details</h2>
            <EditBtn
              btnText={activeEdit === "profile-details" ? "Done" : "Edit"}
              section="profile-details"
              handleActiveEdit={handleActiveEdit}
              isError={isError}
            />
          </div>

          {activeEdit === "profile-details" && (
            <p className="note-text">
              <i className="fa-solid fa-angles-right points"></i>
              Add a display picture for your dashboard.
            </p>
          )}
        </div>

        <div className="set_detail--container">
          {/* profile read only  img */}

          {activeEdit !== "profile-details" && (
            <div className="set_img--rapper">
              <img src={data.profilePic} alt="" />
            </div>
          )}

          {/* profile edit img */}

          {activeEdit === "profile-details" && (
            <div className="set_img--rapper">
              <label
                className="set_upload--btn on-hover"
                htmlFor="set_profile-img"
              >
                <i className="fa-solid fa-plus fa-2x"></i>
              </label>
              <input
                onChange={handleChange}
                type="file"
                name="profilePic"
                id="set_profile-img"
                className="file--input"
              />
              <img src={data.profilePic} alt="" />
            </div>
          )}

          <div className="set-info--rapper">
            {/* desktop text */}

            <div className="set_desktop--text">
              <div className="set__sections-title-rapper">
                <h2 className="set__sections-title ">Profile Details</h2>
                <EditBtn
                  btnText={activeEdit === "profile-details" ? "Done" : "Edit"}
                  section="profile-details"
                  handleActiveEdit={handleActiveEdit}
                  isError={isError}
                />
              </div>

              {activeEdit === "profile-details" && (
                <p className="note-text">
                  <i className="fa-solid fa-angles-right points"></i>
                  Add a display picture for your dashboard.
                </p>
              )}
            </div>

            {/* profile edit section */}

            {activeEdit === "profile-details" && (
              <ul className="set_info--section">
                {/* name input */}
                <Input1
                  id="name"
                  label="Name"
                  value={data.name}
                  placeholder="Your Agency Name..."
                  error={error.name}
                  handleChange={handleChange}
                />

                {/* url input  */}
                <Input1
                  id="url"
                  label="Url"
                  value={data.url}
                  placeholder="Agency Url..."
                  error={error.url}
                  handleChange={handleChange}
                />

                {/* address input */}
                <Input2
                  id="address"
                  label="Address"
                  value={data.address}
                  placeholder="Agency Address..."
                  error={error.address}
                  handleChange={handleChange}
                />

                {/* country input */}
                <Input3
                  id="country"
                  label="Country"
                  value={data.country}
                  placeholder="Agency Country..."
                  error={error.country}
                  handleChange={handleChange}
                />

                {/* state input */}
                <Input3
                  id="state"
                  label="State"
                  value={data.state}
                  placeholder="Agency State..."
                  error={error.state}
                  handleChange={handleChange}
                />
              </ul>
            )}

            {/* profile read only section  */}
            {activeEdit !== "profile-details" && (
              <ul className="set_info-text--container">
                <li>
                  <span className="bold-text">Agency Name: </span>
                  {data.name}
                </li>
                <li>
                  <span className="bold-text ">Agency Url: </span>
                  <span className="url">{data.url}</span>
                </li>
                <li>
                  <span className="bold-text">Office Address: </span>
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

      {/* agency bio section  */}

      <div className="set__sections-container">
        <div className="set__sections-title-rapper">
          <h2 className="set__sections-title">Agency Bio</h2>
          <EditBtn
            btnText={activeEdit === "agency-bio" ? "Done" : "Edit"}
            section="agency-bio"
            handleActiveEdit={handleActiveEdit}
            isError={isError}
          />
        </div>

        {activeEdit === "agency-bio" && (
          <p className="note-text">
            <i className="fa-solid fa-angles-right points"></i>
            Share a little about your Agency, including years of experience,
            achievements etc.
          </p>
        )}
        {activeEdit === "agency-bio" && (
          <p className="note-text">
            <i className="fa-solid fa-angles-right points"></i>
            Include a credible and verifiable information so you can stand out
            from the crowd.
          </p>
        )}

        {/* bio edit section  */}

        {activeEdit === "agency-bio" && (
          <div>
            <div className="set_bio--rapper">
              <textarea
                className="set_bio--text-area"
                onChange={handleChange}
                name="bio"
                id="bio"
                cols="30"
                rows="10"
                value={data.bio}
                required
              ></textarea>
            </div>
            <p className="error-text">{error.bio}</p>
          </div>
        )}

        {/* bio read only section  */}

        {activeEdit !== "agency-bio" && (
          <p className="set_bio-text">{data.bio}</p>
        )}
      </div>

      {/* social media section */}

      <div className="set__sections-container">
        <div className="set__sections-title-rapper">
          <h2 className="set__sections-title">Social Media Handles</h2>
          <EditBtn
            btnText={activeEdit === "social-media" ? "Done" : "Edit"}
            section="social-media"
            handleActiveEdit={handleActiveEdit}
            isError={isError}
          />
        </div>
        {/* social-media  read only section */}
        {activeEdit !== "social-media" && (
          <ul className="set_social--list">
            <li className="social--item">{social.facebook}</li>
            <li className="social--item">{social.twitter}</li>
            <li className="social--item">{social.instagram}</li>
          </ul>
        )}
        {/* social-media  edit section */}
        {activeEdit === "social-media" && (
          <ul className="set_social--media-link">
            {SocialMedia.map((item) => {
              return (
                <li className="set_input--container" key={item.id}>
                  <label className="set_input--label" htmlFor={item.id}>
                    {item.label}
                    <input
                      onChange={handleChange}
                      className="set_input--field"
                      type={item.type}
                      id={item.id}
                      name={item.id}
                      placeholder={item.placeholder}
                      value={social[item.id]}
                      required
                      spellCheck={false}
                    />

                    <p className="error-text">{error[item.id]}</p>
                  </label>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* btn section  */}

      <section className="setting_btn--container">
        <button
          onClick={() => resetDiscard(() => handleSave)}
          className="discard--btn dark--btn bold-text cancel--btn"
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
          className="save--btn  bold-text yes--btn"
        >
          Save
        </button>
      </section>
    </form>
  );
}

export default About;
