import { useState } from "react";
import ModelsKycForm1 from "./Models-Kyc-Form-1";
import ModelsKycForm2 from "./Models-Kyc-Form-2";
import ModelsKycForm3 from "./Models-Kyc-Form-3";

import "./Models-Kyc-Forms.css";

function ModelsForms({ DomItems, userData, accountId, handleModal }) {
  const [activeForm, setActiveForm] = useState(1);
  const [form1Data, setForm1Data] = useState({
    profilePic: "",
    firstName: "",
    lastName: "",
    userName: "",
    gender: "",
    state: "",
    country: "",
    bio: "",
  });
  const [form2Data, setForm2Data] = useState({
    stats: {
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
    },
    category: [],
    jobInterest: [],
    socialMedia: {
      facebook: "",
      twitter: "",
      instagram: "",
    },
  });

  function handleNavigation(text) {
    text === "Next"
      ? setActiveForm((prevForm) => prevForm + 1)
      : text === "Back"
      ? setActiveForm((prevForm) => prevForm - 1)
      : setActiveForm(1);
  }

  function collectData(formId, data) {
    if (formId === 1) {
      setForm1Data(data);
    } else if (formId === 2) {
      setForm2Data(data);
    } else if (formId === 3) {
      SubmitData(data);
    }
  }

  function SubmitData(form3Data) {
    let data = userData[0];
    let update = {
      ...data,
      profile: {
        ...data.profile,
        ...form1Data,
        ...form2Data,
        ...form3Data,
      },
    };

    userData[0] = update;

    console.log(userData);
    console.log(form3Data);
  }

  return (
    <>
      {activeForm === 1 && (
        <ModelsKycForm1
          DomItems={DomItems}
          collectData={collectData}
          handleNavigation={handleNavigation}
          form1Data={form1Data}
        />
      )}
      {activeForm === 2 && (
        <ModelsKycForm2
          DomItems={DomItems}
          gender={form1Data.gender}
          collectData={collectData}
          handleNavigation={handleNavigation}
          handleModal={handleModal}
          form2Data={form2Data}
        />
      )}
      {activeForm === 3 && (
        <ModelsKycForm3
          DomItems={DomItems}
          collectData={collectData}
          handleNavigation={handleNavigation}
          handleModal={handleModal}
        />
      )}
    </>
  );
}

export default ModelsForms;
