import { useEffect, useState } from "react";
import "./About.css";
import EditBtn from "./Edit-btn";

function BasicInfo({
  DomItems,
  handleActiveEdit,
  activeEdit,
  userData,
  resetDiscard,
  handleModal,
}) {
  const { info } = DomItems[0];

  //data state
  const [data, setData] = useState(userData[0].profile);

  //State Error
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    gender: "",
    state: "",
    country: "",
    bio: "",
  });

  const [isError, setIsError] = useState(false);

  //handling changes
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

  //handle save
  function handleSave(btn) {
    let x = {
      ...userData[0].profile,
      profilePic: data.profilePic,
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
      gender: data.gender,
      state: data.state,
      country: data.country,
      bio: data.bio,
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
    <form className="content-container" onSubmit={(e) => e.preventDefault()}>
      {/* profile detail section */}

      <div className="set_sections-container ">
        {/* mobile text */}

        <div className="set_mobile-text">
          <div className="set_sections-title-rapper">
            <h2 className="set_sections-title ">Profile Details</h2>
            <EditBtn
              btnText={activeEdit === "profile-details" ? "Done" : "Edit"}
              section="profile-details"
              handleActiveEdit={handleActiveEdit}
              isError={isError}
            />
          </div>

          {activeEdit === "profile-details" && (
            <p className="set_description">
              <i className="fa-solid fa-angles-right note"></i>
              Include a well-lit headShort, generally framed between the top of
              your head to just below your shoulders.
            </p>
          )}
        </div>

        <div className="set_detail-container">
          {/* profile read only  img */}

          {activeEdit !== "profile-details" && (
            <div className="set_img-rapper">
              <img src={data.profilePic} alt="" />
            </div>
          )}

          {/* profile edit img */}

          {activeEdit === "profile-details" && (
            <div className="set_img-rapper">
              <label
                className="set_upload-btn on-hover"
                htmlFor="set_profile-img"
              >
                <i className="fa-solid fa-plus fa-2x"></i>
              </label>
              <input
                onChange={handleChange}
                type="file"
                name="profilePic"
                id="set_profile-img"
                className="file-input"
              />
              <img src={data.profilePic} alt="" />
            </div>
          )}

          <div className="set1_info-section-rapper">
            {/* desktop text */}

            <div className="set_desktop-text">
              <div className="set_sections-title-rapper">
                <h2 className="set_sections-title ">Profile Details</h2>
                <EditBtn
                  btnText={activeEdit === "profile-details" ? "Done" : "Edit"}
                  section="profile-details"
                  handleActiveEdit={handleActiveEdit}
                  isError={isError}
                />
              </div>

              {activeEdit === "profile-details" && (
                <p className="set_description">
                  <i className="fa-solid fa-angles-right note"></i>
                  Include a well-lit headShort, generally framed between the top
                  of your head to just below your shoulders.
                </p>
              )}
            </div>

            {/* profile edit section */}

            {activeEdit === "profile-details" && (
              <ul className="set1_info-section">
                {info.map((item) => {
                  return (
                    <li className="set1_input-container" key={item.id}>
                      <label className="set1_input-label" htmlFor={item.id}>
                        {item.label}
                        <input
                          onChange={handleChange}
                          className="set1_input-field"
                          type={item.type}
                          id={item.id}
                          name={item.id}
                          placeholder={item.placeholder}
                          value={data[item.id]}
                          required
                        />
                        <p className="error-text"> {error[item.id]}</p>
                      </label>
                    </li>
                  );
                })}
              </ul>
            )}

            {/* profile read only section  */}
            {activeEdit !== "profile-details" && (
              <ul className="set1_info-text-container">
                <li>
                  <span className="bold-text">First Name: </span>
                  {data.firstName}
                </li>
                <li>
                  <span className="bold-text">Last Name: </span>
                  {data.lastName}
                </li>
                <li>
                  <span className="bold-text">User Name: </span>
                  {data.userName}
                </li>
                <li>
                  <span className="bold-text">Gender: </span>
                  {data.gender}
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

      {/* model bio section  */}

      <div className="set_sections-container">
        <div className="set_sections-title-rapper">
          <h2 className="set_sections-title">Model's Bio</h2>
          <EditBtn
            btnText={activeEdit === "model-bio" ? "Done" : "Edit"}
            section="model-bio"
            handleActiveEdit={handleActiveEdit}
            isError={isError}
          />
        </div>

        {activeEdit === "model-bio" && (
          <p className="set_description">
            <i className="fa-solid fa-angles-right note"></i>
            Share a little about your self, including years of modeling
            experience, previous clients, etc.
          </p>
        )}
        {activeEdit === "model-bio" && (
          <p className="set_description">
            <i className="fa-solid fa-angles-right note"></i>
            Don't be afraid to express your personality so you can stand out
            from the crowd.
          </p>
        )}

        {/* bio edit section  */}

        {activeEdit === "model-bio" && (
          <div>
            <div className="bio-rapper">
              <textarea
                className="bio-text-area"
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

        {activeEdit !== "model-bio" && <p className="bio-text">{data.bio}</p>}
      </div>

      {/* btn section  */}

      <section className="setting_btn-container">
        <button
          onClick={() => resetDiscard(() => handleSave)}
          className="discard-btn  bold-text cancel-btn"
        >
          Discard
        </button>
        <button
          style={{
            backgroundColor: activeEdit !== "Done" && "#bbbb",
          }}
          disabled={activeEdit !== "Done" && true}
          onClick={() => handleSave("save")}
          className="save-btn  bold-text yes-btn"
        >
          Save
        </button>
      </section>
    </form>
  );
}

export default BasicInfo;
