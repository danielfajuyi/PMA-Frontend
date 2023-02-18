import "./Profile.css";
import ModelInfo from "./Model-Info";
import Links from "./Links";
import ModelPhoto from "./Model-Photo";
import ModelStats from "./Model-Stats";
import ModelBio from "./Model-Bio";
import ModelVideo from "./Model-Video";
import ModelPolaroid from "./Model-Polaroid";
import BookingForm from "../BookModelForm/BookingForm";
import { useState, useEffect } from "react";
import ModelPage from "../Models-Acct/Dash-Board/model_page";

function ProfilePage({ item, postMsg }) {
  const [activeSection, setActiveSection] = useState("Photos");
  const [toggleForm, setToggleForm] = useState(false);
  const [displayLimit, setDisplayLimit] = useState("");
  const [deviceSize, setDeviceSize] = useState(window.innerWidth);
  const [activeDisplay, setActiveDisplay] = useState("");
  const [viewAll, setViewAll] = useState(false);

  //this is just to clear error on the dashboard.
  const [showNavbar, setShowNavbar] = useState(true);

  // setting device size
  function handleResize() {
    setDeviceSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [deviceSize]);

  useEffect(() => {
    deviceSize > 1279 ? setDisplayLimit(8) : setDisplayLimit(6);
  }, [deviceSize]);

  function handleSection(e) {
    let section = e.target.textContent;
    setActiveSection(section);
  }

  function handleForm() {
    setToggleForm((prevForm) => !prevForm);
  }

  function handleDisplay(id, text) {
    setActiveDisplay(id);
    text === "view All" ? setViewAll(true) : setViewAll(false);
  }

  return (
    <>
      <ModelInfo item={item} handleForm={handleForm} />
      <Links handleSection={handleSection} activeSection={activeSection} />
      {activeSection === "Photos" && (
        <ModelPhoto
          photos={item.photos}
          activeDisplay={activeDisplay}
          displayLimit={displayLimit}
          handleDisplay={handleDisplay}
          viewAll={viewAll}
        />
      )}
      {activeSection === "Stats" && <ModelStats item={item} />}
      {activeSection === "Bio" && <ModelBio item={item} />}
      {activeSection === "Videos" && (
        <ModelVideo
          videos={item.videos}
          activeDisplay={activeDisplay}
          displayLimit={displayLimit}
          handleDisplay={handleDisplay}
          viewAll={viewAll}
        />
      )}
      {activeSection === "Polaroids" && (
        <ModelPolaroid
          polaroids={item.polaroids}
          activeDisplay={activeDisplay}
          displayLimit={displayLimit}
          handleDisplay={handleDisplay}
          viewAll={viewAll}
        />
      )}
      <BookingForm
        handleForm={handleForm}
        toggleForm={toggleForm}
        profileId={item.id}
        postMsg={postMsg}
      />

      {/* dashboard */}

      <ModelPage setShowNavbar={setShowNavbar} />

      <div className="profile-footer">
        <small>Copyright &copy; 2022 PREMIUM MODEL</small>
        <span>{`(${deviceSize})`}</span>
      </div>
    </>
  );
}
export default ProfilePage;
