import "./Stats.css";
import EditBtn from "./Edit-btn";
import { useState } from "react";
import { useEffect } from "react";

function Stats({
  DomItems,
  handleActiveEdit,
  activeEdit,
  userData,
  handleModal,
  resetDiscard,
}) {
  const { statsInput, categoryInput, jobsInput, SocialMedia } = DomItems[0];
  const [newStats, setNewStats] = useState([]);
  const { stats, category, jobInterest, socialMedia, gender } =
    userData[0].profile;

  //data state
  const [stat, setStat] = useState(stats);
  const [social, setSocial] = useState(socialMedia);
  const [cate, setCate] = useState(category);
  const [job, setJob] = useState(jobInterest);

  //error state
  const [error, setError] = useState({
    height: "",
    waist: "",
    bust: "",
    chest: "",
    hip: "",
    shoulder: "",
    eyes: "",
    size: "",
    shoe: "",
    tattoos: "",
    agency: "",
    hairColor: "",
    hairLength: "",
    ethnicity: "",
    skinColor: "",
    language: "",
    availableForTravel: "",
    facebook: "",
    twitter: "",
    instagram: "",
  });

  const [isError, setIsError] = useState(false);

  //handling text input
  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "facebook" || name === "twitter" || name === "instagram") {
      setSocial((prevData) => ({ ...prevData, [name]: value }));
    } else {
      setStat((prevData) => ({ ...prevData, [name]: value }));
    }
  }

  //validating check inputs
  function handleCheck(e) {
    const { name, value, checked } = e.target;

    //validating category check input
    if (name === "category") {
      if (cate.length < 2) {
        //unchecking input and removing them from the array

        checked === false
          ? setCate((prevVal) => prevVal.filter((item) => item !== value))
          : //checking input and adding them to the array
            setCate((prevVal) => [...prevVal, value]);
      } else {
        //unchecking input and removing them from the array

        checked === false
          ? setCate((prevVal) => prevVal.filter((item) => item !== value))
          : //opening an alert modal
            handleModal("category");
      }

      //validating job interest check input
    } else if (name === "job-interest") {
      checked === false
        ? setJob((prevJob) => prevJob.filter((item) => item !== value))
        : setJob((prevJob) => [...prevJob, value]);
    }
  }

  //setting Error messages
  useEffect(() => {
    function handleError() {
      let errorText = "This detail is required.!";
      let SocialErr = "Your social link is required.!";

      stat.height === ""
        ? setError((prev) => ({ ...prev, height: errorText }))
        : setError((prev) => ({ ...prev, height: "" }));

      stat.waist === ""
        ? setError((prev) => ({ ...prev, waist: errorText }))
        : setError((prev) => ({ ...prev, waist: "" }));

      stat.eyes === ""
        ? setError((prev) => ({ ...prev, eyes: errorText }))
        : setError((prev) => ({ ...prev, eyes: "" }));

      stat.size === ""
        ? setError((prev) => ({ ...prev, size: errorText }))
        : setError((prev) => ({ ...prev, size: "" }));

      stat.shoe === ""
        ? setError((prev) => ({ ...prev, shoe: errorText }))
        : setError((prev) => ({ ...prev, shoe: "" }));

      stat.tattoos === ""
        ? setError((prev) => ({ ...prev, tattoos: errorText }))
        : setError((prev) => ({ ...prev, tattoos: "" }));

      stat.agency === ""
        ? setError((prev) => ({ ...prev, agency: errorText }))
        : setError((prev) => ({ ...prev, agency: "" }));

      stat.hairColor === ""
        ? setError((prev) => ({ ...prev, hairColor: errorText }))
        : setError((prev) => ({ ...prev, hairColor: "" }));

      stat.hairLength === ""
        ? setError((prev) => ({ ...prev, hairLength: errorText }))
        : setError((prev) => ({ ...prev, hairLength: "" }));

      stat.ethnicity === ""
        ? setError((prev) => ({ ...prev, ethnicity: errorText }))
        : setError((prev) => ({ ...prev, ethnicity: "" }));

      stat.skinColor === ""
        ? setError((prev) => ({ ...prev, skinColor: errorText }))
        : setError((prev) => ({ ...prev, skinColor: "" }));

      stat.language === ""
        ? setError((prev) => ({ ...prev, language: errorText }))
        : setError((prev) => ({ ...prev, language: "" }));

      stat.availableForTravel === ""
        ? setError((prev) => ({ ...prev, availableForTravel: errorText }))
        : setError((prev) => ({ ...prev, availableForTravel: "" }));

      social.facebook === ""
        ? setError((prev) => ({ ...prev, facebook: SocialErr }))
        : setError((prev) => ({ ...prev, facebook: "" }));

      social.twitter === ""
        ? setError((prev) => ({ ...prev, twitter: SocialErr }))
        : setError((prev) => ({ ...prev, twitter: "" }));

      social.instagram === ""
        ? setError((prev) => ({ ...prev, instagram: SocialErr }))
        : setError((prev) => ({ ...prev, instagram: "" }));

      if (gender === "female") {
        stat.hip === ""
          ? setError((prev) => ({ ...prev, hip: errorText }))
          : setError((prev) => ({ ...prev, hip: "" }));

        stat.bust === ""
          ? setError((prev) => ({ ...prev, bust: errorText }))
          : setError((prev) => ({ ...prev, bust: "" }));
      } else if (gender === "male") {
        stat.chest === ""
          ? setError((prev) => ({ ...prev, chest: errorText }))
          : setError((prev) => ({ ...prev, chest: "" }));

        stat.shoulder === ""
          ? setError((prev) => ({ ...prev, shoulder: errorText }))
          : setError((prev) => ({ ...prev, shoulder: "" }));
      }
    }

    handleError();
  }, [stat, social, gender]);

  //checking for an error
  useEffect(() => {
    let err = false;

    if (
      error.height ||
      error.waist ||
      error.eyes ||
      error.size ||
      error.shoe ||
      error.tattoos ||
      error.agency ||
      error.hairColor ||
      error.hairLength ||
      error.ethnicity ||
      error.skinColor ||
      error.language ||
      error.travel ||
      error.facebook ||
      error.twitter ||
      error.instagram
    ) {
      err = true;
    } else if (error.bust || error.hip) {
      gender === "female" && (err = true);
    } else if (error.chest || error.shoulder) {
      gender === "male" && (err = true);
    }

    if (cate.length === 0) {
      handleModal("category");
      err = true;
    } else if (job.length === 0) {
      handleModal("job");
      err = true;
    }
    setIsError(err);
  }, [error, gender, cate, job]);

  //checking for gender
  useEffect(() => {
    setNewStats(
      statsInput.filter((item) =>
        gender.toLowerCase() === "male"
          ? item.id !== "bust" && item.id !== "hip"
          : gender.toLowerCase() === "female"
          ? item.id !== "chest" && item.id !== "shoulder"
          : null
      )
    );
  }, [statsInput, gender]);

  //handle save
  function handleSave(btn) {
    let x = {
      ...userData[0].profile,
      stats: stat,
      category: cate,
      jobInterest: job,
      socialMedia: social,
    };
    if (btn === "save") {
      console.log((userData[0].profile = x));
      handleModal("save");
    } else {
      setStat(stats);
      setCate(category);
      setJob(jobInterest);
      setSocial(socialMedia);
      handleActiveEdit(activeEdit, "Done");
      console.log(userData[0].profile);
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <section className="content-container">
        {/* stats section */}

        <div className="set_sections-title-rapper">
          <h2 className="set_sections-title">Models statistic</h2>
          <EditBtn
            btnText={activeEdit === "model-statistic" ? "Done" : "Edit"}
            section="model-statistic"
            handleActiveEdit={handleActiveEdit}
            isError={isError}
          />
        </div>
        {activeEdit === "model-statistic" && (
          <p className="set_description">
            <i className="fa-solid fa-angles-right note"></i>
            Setting your measurements allows your profile to be found in search
            results.
          </p>
        )}
        {activeEdit === "model-statistic" && (
          <p className="set_description">
            <i className="fa-solid fa-angles-right note"></i>
            Do your best to be as accurate as possible.
          </p>
        )}
        {/*statistic edit section */}
        {activeEdit === "model-statistic" && (
          <ul className="set_model-statistic">
            {newStats.map((item) => {
              return (
                <li className="setting_input-container" key={item.id}>
                  <label className="setting_input-label" htmlFor={item.id}>
                    {item.label}
                    <input
                      onChange={handleChange}
                      className="setting_input-field"
                      type={item.type}
                      id={item.id}
                      name={item.id}
                      placeholder={item.placeholder}
                      spellCheck={false}
                      value={stat[item.id]}
                      required
                    />
                    <p className="error-text">{error[item.id]}</p>
                  </label>
                </li>
              );
            })}
          </ul>
        )}

        {/*statistic read only section  */}
        {activeEdit !== "model-statistic" && (
          <ul className="set_stats-list">
            <li className="stats-item">
              <span className="stats-item-text">height: </span>
              {stat.height}
            </li>
            <li className="stats-item">
              <span className="stats-item-text">waist: </span>
              {stat.waist}
            </li>
            {gender.toLowerCase() === "female" && (
              <li className="stats-item">
                <span className="stats-item-text">bust: </span>
                {stat.bust}
              </li>
            )}
            {gender.toLowerCase() === "female" && (
              <li className="stats-item">
                <span className="stats-item-text">hip: </span>
                {stat.hip}
              </li>
            )}
            {gender.toLowerCase() === "male" && (
              <li className="stats-item">
                <span className="stats-item-text">chest: </span>
                {stat.chest}
              </li>
            )}
            {gender.toLowerCase() === "male" && (
              <li className="stats-item">
                <span className="stats-item-text">shoulder: </span>
                {stat.shoulder}
              </li>
            )}
            <li className="stats-item">
              <span className="stats-item-text">size: </span>
              {stat.size}
            </li>
            <li className="stats-item">
              <span className="stats-item-text">shoe: </span>
              {stat.shoe}
            </li>
            <li className="stats-item">
              <span className="stats-item-text">eyes: </span>
              {stat.eyes}
            </li>
            <li className="stats-item">
              <span className="stats-item-text">skin Color: </span>
              {stat.skinColor}
            </li>
            <li className="stats-item">
              <span className="stats-item-text">hairColor: </span>
              {stat.hairColor}
            </li>
            <li className="stats-item">
              <span className="stats-item-text">hairLength: </span>
              {stat.hairLength}
            </li>

            <li className="stats-item">
              <span className="stats-item-text">tattoos: </span>
              {stat.tattoos}
            </li>

            <li className="stats-item">
              <span className="stats-item-text">ethnicity: </span>
              {stat.ethnicity}
            </li>

            <li className="stats-item">
              <span className="stats-item-text">language: </span>
              {stat.language}
            </li>
            <li className="stats-item">
              <span className="stats-item-text">agency: </span>
              {stat.agency}
            </li>
            <li className="stats-item">
              <span className="stats-item-text">available For Travel: </span>
              {stat.availableForTravel}
            </li>
          </ul>
        )}

        {/* category section*/}

        <div className="set_sections-title-rapper">
          <h2 className="set_sections-title">Models categories</h2>
          <EditBtn
            btnText={activeEdit === "model-categories" ? "Done" : "Edit"}
            section="model-categories"
            handleActiveEdit={handleActiveEdit}
            isError={isError}
          />
          {activeEdit === "model-categories" && (
            <p className="category-text-2">
              choose which type of model you suited (2max)
            </p>
          )}
        </div>
        {activeEdit === "model-categories" && (
          <p className="category-text-1">
            choose which type of model you suited (2max)
          </p>
        )}
        {/* category read only section */}
        {activeEdit !== "model-categories" && (
          <ul className="set_category-list">
            {cate.map((item) => (
              <li key={item} className="category-item">
                {item} Model
              </li>
            ))}
          </ul>
        )}
        {/* category edit section */}
        {activeEdit === "model-categories" && (
          <ul className="set_model-categories">
            {categoryInput.map((item) => {
              return (
                <li className="setting_input-container" key={item.id}>
                  <label
                    className="setting_check-box-label colored-hover"
                    htmlFor={item.id}
                  >
                    {item.label}
                    <input
                      onChange={handleCheck}
                      className="setting_check-box"
                      type={item.type}
                      id={item.id}
                      name="category"
                      value={item.value}
                      checked={
                        cate.find((value) => value === item.value)
                          ? true
                          : false
                      }
                    />
                  </label>
                </li>
              );
            })}
          </ul>
        )}
        {/* work interest section */}
        <div className="set_sections-title-rapper">
          <h2 className="set_sections-title">Jobs interested in</h2>
          <EditBtn
            btnText={activeEdit === "job-interest" ? "Done" : "Edit"}
            section="job-interest"
            handleActiveEdit={handleActiveEdit}
            isError={isError}
          />
        </div>
        {/* work-interest read only section */}
        {activeEdit !== "job-interest" && (
          <ul className="set_job-list">
            {job.map((item) => (
              <li key={item} className="job-item">
                {item}
              </li>
            ))}
          </ul>
        )}
        {/* work-interest edit section */}
        {activeEdit === "job-interest" && (
          <ul className="set_job-interest">
            {jobsInput.map((item) => {
              return (
                <li className="setting_input-container" key={item.id}>
                  <label
                    className="setting_check-box-label colored-hover"
                    htmlFor={item.id}
                  >
                    {item.label}
                    <input
                      onChange={handleCheck}
                      className="setting_check-box"
                      type={item.type}
                      id={item.id}
                      name="job-interest"
                      value={item.value}
                      checked={
                        job.find((value) => value === item.value) ? true : false
                      }
                    />
                  </label>
                </li>
              );
            })}
          </ul>
        )}
        {/* social media section */}
        <div className="set_sections-title-rapper">
          <h2 className="set_sections-title">Social Media Handles</h2>
          <EditBtn
            btnText={activeEdit === "social-media" ? "Done" : "Edit"}
            section="social-media"
            handleActiveEdit={handleActiveEdit}
            isError={isError}
          />
        </div>
        {/* social-media  read only section */}
        {activeEdit !== "social-media" && (
          <ul className="set_social-list">
            <li className="social-item">{social.facebook}</li>
            <li className="social-item">{social.twitter}</li>
            <li className="social-item">{social.instagram}</li>
          </ul>
        )}
        {/* social-media  edit section */}
        {activeEdit === "social-media" && (
          <ul className="set_social-media-link">
            {SocialMedia.map((item) => {
              return (
                <li className="setting_input-container" key={item.id}>
                  <label className="setting_input-label" htmlFor={item.id}>
                    {item.label}
                    <input
                      onChange={handleChange}
                      className="setting_input-field"
                      type={item.type}
                      id={item.id}
                      name={item.id}
                      placeholder={item.placeholder}
                      spellCheck={false}
                      value={social[item.id]}
                      required
                    />
                    <p className="error-text">{error[item.id]}</p>
                  </label>
                </li>
              );
            })}
          </ul>
        )}

        {/* button section  */}

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
      </section>
    </form>
  );
}

export default Stats;
