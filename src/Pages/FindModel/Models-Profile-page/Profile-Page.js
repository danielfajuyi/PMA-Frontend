import "./Profile.css";
import ModelInfo from "./Model-Info";
import Links from "./Links";
import ModelPhoto from "./Model-Photo";
import ModelStats from "./Model-Stats";
import ModelBio from "./Model-Bio";
import ModelVideo from "./Model-Video";
import ModelPolaroid from "./Model-Polaroid";
import BookingForm from "./BookingForm";
import { useState } from "react";

function ProfilePage({ item, postMsg }) {
  const [activeSection, setActiveSection] = useState("Photos");
  const [toggleForm, setToggleForm] = useState(false);
  const [displayLimit, setDisplayLimit] = useState(4);
  const [activeDisplay, setActiveDisplay] = useState("");

  function handleSection(e) {
    let section = e.target.textContent;
    setActiveSection(section);
  }

  function handleForm() {
    setToggleForm((prevForm) => !prevForm);
  }

  function handleDisplay(e) {
    const display = e.target.textContent;
    const displayId = e.target.id;

    setActiveDisplay(displayId);

    if (display === "view All") {
      setDisplayLimit(item.photos.length);
    } else if (display === "view Less") {
      setDisplayLimit(4);
    }
  }

  return (
    <>
      <ModelInfo item={item} handleForm={handleForm} />
      <Links handleSection={handleSection} activeSection={activeSection} />
      {activeSection === "Photos" && (
        <ModelPhoto
          item={item}
          activeDisplay={activeDisplay}
          displayLimit={displayLimit}
          handleDisplay={handleDisplay}
        />
      )}
      {activeSection === "Stats" && <ModelStats item={item} />}
      {activeSection === "Bio" && <ModelBio item={item} />}
      {activeSection === "Videos" && (
        <ModelVideo
          item={item}
          activeDisplay={activeDisplay}
          displayLimit={displayLimit}
          handleDisplay={handleDisplay}
        />
      )}
      {activeSection === "Polaroids" && (
        <ModelPolaroid
          item={item}
          activeDisplay={activeDisplay}
          displayLimit={displayLimit}
          handleDisplay={handleDisplay}
        />
      )}
      <BookingForm
        handleForm={handleForm}
        toggleForm={toggleForm}
        profileId={item.id}
        postMsg={postMsg}
      />
    </>
  );
}
export default ProfilePage;
