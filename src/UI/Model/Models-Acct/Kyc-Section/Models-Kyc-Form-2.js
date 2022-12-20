import "./Models-Kyc-Form-2.css";
import FormNavBtn from "./Form-nav-btn";
import { useState } from "react";
import { useEffect } from "react";

function ModelsKycForm2({
  DomItems,
  collectData,
  handleNavigation,
  gender,
  form2Data,
  handleModal,
}) {
  //static DOM elements
  const { statsInput, categoryInput, jobsInput, SocialMedia } = DomItems[0];
  const [newStats, setNewStats] = useState([]);

  const [stats, setStats] = useState(form2Data.stats);
  const [category, setCategory] = useState(form2Data.category);
  const [jobInterest, setJobInterest] = useState(form2Data.jobInterest);
  const [social, setSocial] = useState({ ...form2Data.socialMedia });

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
    travel: "",
    facebook: "",
    twitter: "",
    instagram: "",
  });

  const [isError, setIsError] = useState(false);
  const [showError, setShowError] = useState(false);

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

  //handling text input
  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "facebook" || name === "twitter" || name === "instagram") {
      setSocial((prevData) => ({ ...prevData, [name]: value }));
    } else {
      setStats((prevData) => ({ ...prevData, [name]: value }));
    }
  }

  //handling check inputs
  function handleCheck(e) {
    const { name, value, checked } = e.target;

    //validating category check input
    if (name === "category") {
      if (category.length < 2) {
        //unchecking input and removing them from the array

        checked === false
          ? setCategory((prevVal) => prevVal.filter((item) => item !== value))
          : //checking input and adding them to the array
            setCategory((prevVal) => [...prevVal, value]);
      } else {
        //unchecking input and removing them from the array

        checked === false
          ? setCategory((prevVal) => prevVal.filter((item) => item !== value))
          : //opening an alert modal
            handleModal("category");
      }

      //validating job interest check input
    } else if (name === "job-interest") {
      checked === false
        ? setJobInterest((prevJob) => prevJob.filter((item) => item !== value))
        : setJobInterest((prevJob) => [...prevJob, value]);
    }
  }

  //setting Error messages
  useEffect(() => {
    function handleError() {
      let errorText = "Please Fill out this field";

      stats.height === ""
        ? setError((prev) => ({ ...prev, height: errorText }))
        : setError((prev) => ({ ...prev, height: "" }));

      stats.waist === ""
        ? setError((prev) => ({ ...prev, waist: errorText }))
        : setError((prev) => ({ ...prev, waist: "" }));

      stats.eyes === ""
        ? setError((prev) => ({ ...prev, eyes: errorText }))
        : setError((prev) => ({ ...prev, eyes: "" }));

      stats.size === ""
        ? setError((prev) => ({ ...prev, size: errorText }))
        : setError((prev) => ({ ...prev, size: "" }));

      stats.shoe === ""
        ? setError((prev) => ({ ...prev, shoe: errorText }))
        : setError((prev) => ({ ...prev, shoe: "" }));

      stats.tattoos === ""
        ? setError((prev) => ({ ...prev, tattoos: errorText }))
        : setError((prev) => ({ ...prev, tattoos: "" }));

      stats.agency === ""
        ? setError((prev) => ({ ...prev, agency: errorText }))
        : setError((prev) => ({ ...prev, agency: "" }));

      stats.hairColor === ""
        ? setError((prev) => ({ ...prev, hairColor: errorText }))
        : setError((prev) => ({ ...prev, hairColor: "" }));

      stats.hairLength === ""
        ? setError((prev) => ({ ...prev, hairLength: errorText }))
        : setError((prev) => ({ ...prev, hairLength: "" }));

      stats.ethnicity === ""
        ? setError((prev) => ({ ...prev, ethnicity: errorText }))
        : setError((prev) => ({ ...prev, ethnicity: "" }));

      stats.skinColor === ""
        ? setError((prev) => ({ ...prev, skinColor: errorText }))
        : setError((prev) => ({ ...prev, skinColor: "" }));

      stats.language === ""
        ? setError((prev) => ({ ...prev, language: errorText }))
        : setError((prev) => ({ ...prev, language: "" }));

      stats.availableForTravel === ""
        ? setError((prev) => ({ ...prev, travel: errorText }))
        : setError((prev) => ({ ...prev, travel: "" }));

      social.facebook === ""
        ? setError((prev) => ({ ...prev, facebook: errorText }))
        : setError((prev) => ({ ...prev, facebook: "" }));

      social.twitter === ""
        ? setError((prev) => ({ ...prev, twitter: errorText }))
        : setError((prev) => ({ ...prev, twitter: "" }));

      social.instagram === ""
        ? setError((prev) => ({ ...prev, instagram: errorText }))
        : setError((prev) => ({ ...prev, instagram: "" }));

      if (gender === "female") {
        stats.hip === ""
          ? setError((prev) => ({ ...prev, hip: errorText }))
          : setError((prev) => ({ ...prev, hip: "" }));

        stats.bust === ""
          ? setError((prev) => ({ ...prev, bust: errorText }))
          : setError((prev) => ({ ...prev, bust: "" }));
      } else if (gender === "male") {
        stats.chest === ""
          ? setError((prev) => ({ ...prev, chest: errorText }))
          : setError((prev) => ({ ...prev, chest: "" }));

        stats.shoulder === ""
          ? setError((prev) => ({ ...prev, shoulder: errorText }))
          : setError((prev) => ({ ...prev, shoulder: "" }));
      }
    }

    handleError();
  }, [stats, social, gender]);

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
      error.instagram ||
      category.length === 0 ||
      jobInterest.length === 0
    ) {
      err = true;
    } else if (error.bust || error.hip) {
      gender === "female" && (err = true);
    } else if (error.chest || error.shoulder) {
      gender === "male" && (err = true);
    }

    setIsError(err);
  }, [error, gender, category, jobInterest]);

  //submit and go to the next page
  function handleSubmit(text) {
    if (isError) {
      setShowError(true);

      if (category.length === 0) {
        handleModal("category");
      } else if (jobInterest.length === 0) {
        handleModal("job");
      }
    } else {
      collectData(2, {
        stats: { ...stats },
        category: [...category],
        jobInterest: [...jobInterest],
        socialMedia: { ...social },
      });
      handleNavigation(text);
    }
  }

  return (
    <form className="kyc-form" onSubmit={(e) => e.preventDefault()}>
      <section className="kyc-hero">
        <img src="/images/kyc (2).jpg" alt="" />
        <div className="kyc-hero__text-rapper">
          <h2 className="kyc-hero__title">Step-2</h2>
          <p className="kyc-hero__text">You Are Almost There!!</p>
        </div>
      </section>

      {/* stats section */}
      <section className="kyc-content-section">
        <div className="list-container">
          <h2 className="sections-title">Models statistic</h2>
          <ul className="model-statistic">
            {newStats.map((item) => {
              return (
                <li className="kyc-input-container" key={item.id}>
                  <label className="input-label" htmlFor={item.id}>
                    {item.label}
                    <input
                      onChange={handleChange}
                      className="kyc-input-field"
                      type={item.type}
                      id={item.id}
                      name={item.id}
                      placeholder={item.placeholder}
                      value={
                        item.id === "height"
                          ? stats.height
                          : item.id === "waist"
                          ? stats.waist
                          : item.id === "bust"
                          ? stats.bust
                          : item.id === "chest"
                          ? stats.chest
                          : item.id === "hip"
                          ? stats.hip
                          : item.id === "shoulder"
                          ? stats.shoulder
                          : item.id === "eyes"
                          ? stats.eyes
                          : item.id === "size"
                          ? stats.size
                          : item.id === "shoe"
                          ? stats.shoe
                          : item.id === "tattoos"
                          ? stats.tattoos
                          : item.id === "agency"
                          ? stats.agency
                          : item.id === "hairColor"
                          ? stats.hairColor
                          : item.id === "hairLength"
                          ? stats.hairLength
                          : item.id === "ethnicity"
                          ? stats.ethnicity
                          : item.id === "skinColor"
                          ? stats.skinColor
                          : item.id === "language"
                          ? stats.language
                          : item.id === "availableForTravel"
                          ? stats.availableForTravel
                          : null
                      }
                      required
                    />
                    {showError && (
                      <p className="sign-up-error-text">
                        {item.id === "height"
                          ? error.height
                          : item.id === "waist"
                          ? error.waist
                          : item.id === "bust"
                          ? error.bust
                          : item.id === "chest"
                          ? error.chest
                          : item.id === "hip"
                          ? error.hip
                          : item.id === "shoulder"
                          ? error.shoulder
                          : item.id === "eyes"
                          ? error.eyes
                          : item.id === "size"
                          ? error.size
                          : item.id === "shoe"
                          ? error.shoe
                          : item.id === "tattoos"
                          ? error.tattoos
                          : item.id === "agency"
                          ? error.agency
                          : item.id === "hairColor"
                          ? error.hairColor
                          : item.id === "hairLength"
                          ? error.hairLength
                          : item.id === "ethnicity"
                          ? error.ethnicity
                          : item.id === "skinColor"
                          ? error.skinColor
                          : item.id === "language"
                          ? error.language
                          : item.id === "availableForTravel"
                          ? error.travel
                          : null}
                      </p>
                    )}
                  </label>
                </li>
              );
            })}
          </ul>

          {/* category section  */}
          <div className="list-title-rapper">
            <h2 className="sections-title">Models categories</h2>
            <p className="category-des-text">
              choose which type of model you suited (2max)
            </p>
          </div>
          <ul className="model-categories">
            {categoryInput.map((item) => {
              return (
                <li className="kyc-input-container" key={item.id}>
                  <label
                    className="check-box-label colored-hover"
                    htmlFor={item.id}
                  >
                    {item.label}
                    <input
                      onChange={handleCheck}
                      className="kyc-check-box colored-hover"
                      type={item.type}
                      id={item.id}
                      name="category"
                      value={item.value}
                      checked={
                        category.find((value) => value === item.value)
                          ? true
                          : false
                      }
                    />
                  </label>
                </li>
              );
            })}
          </ul>

          {/* job interest section */}
          <h2 className="sections-title">Job interested in</h2>
          <ul className="work-interest">
            {jobsInput.map((item) => {
              return (
                <li className="kyc-input-container" key={item.id}>
                  <label
                    className="check-box-label colored-hover"
                    htmlFor={item.id}
                  >
                    {item.label}
                    <input
                      onChange={handleCheck}
                      className="kyc-check-box colored-hover"
                      type={item.type}
                      id={item.id}
                      name="job-interest"
                      value={item.value}
                      checked={
                        jobInterest.find((value) => value === item.value)
                          ? true
                          : false
                      }
                    />
                  </label>
                </li>
              );
            })}
          </ul>

          {/* social media section */}
          <h2 className="sections-title">Social Media Handles</h2>
          <ul className="social-media-link">
            {SocialMedia.map((item) => {
              return (
                <li className="kyc-input-container" key={item.id}>
                  <label className="input-label" htmlFor={item.id}>
                    {item.label}
                    <input
                      onChange={handleChange}
                      className="kyc-input-field"
                      type={item.type}
                      id={item.id}
                      name={item.id}
                      placeholder={item.placeholder}
                      value={
                        item.id === "facebook"
                          ? social.facebook
                          : item.id === "twitter"
                          ? social.twitter
                          : item.id === "instagram"
                          ? social.instagram
                          : null
                      }
                      required
                    />
                    {showError && (
                      <p className="sign-up-error-text">
                        {item.id === "facebook"
                          ? error.facebook
                          : item.id === "twitter"
                          ? error.twitter
                          : item.id === "instagram"
                          ? error.instagram
                          : null}
                      </p>
                    )}
                  </label>
                </li>
              );
            })}
          </ul>

          {/* nav section */}
          <div className="kyc-btn-container">
            <FormNavBtn
              btnText="Back"
              name="form2"
              handleClick={handleNavigation}
              type="button"
            />
            <FormNavBtn
              btnText="Next"
              name="form2"
              handleClick={handleSubmit}
              type="button"
            />
          </div>
        </div>
      </section>
    </form>
  );
}

export default ModelsKycForm2;
