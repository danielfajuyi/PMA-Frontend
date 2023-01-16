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
    agency: "",
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
      gender: "",
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

  const [form3Data, setForm3Data] = useState({
    photos: {
      photo1: "",
      photo2: "",
      photo3: "",
      photo4: "",
      photo5: "",
      photo6: "",
    },
    polaroids: {
      pola1: "",
      pola2: "",
      pola3: "",
      pola4: "",
      pola5: "",
      pola6: "",
    },
    compCard: "",
  });

  function handleNavigation(text) {
    if (text === "Next") {
      setActiveForm((prevForm) => prevForm + 1);
    } else if (text === "Back") {
      setActiveForm((prevForm) => prevForm - 1);
    } else {
      setTimeout(() => {
        setActiveForm(1);
      }, 1500);
    }
  }

  function collectData(formId, data) {
    if (formId === 1) {
      setForm1Data(data);
    } else if (formId === 2) {
      setForm2Data(data);
    } else if (formId === 3) {
      setForm3Data(data);
      SubmitData(data);

      setTimeout(() => {
        handleModal("kyc");
      }, 1500);
    }
  }

  //  //getting models data
  //  useEffect(() => {
  //   axios
  //     .get("http://localhost:3500/models")
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }, []);

  function SubmitData(form3Data) {
    //converting the photo object in the form2Data into an array
    //destructure photo object from form2Data
    const { photo1, photo2, photo3, photo4, photo5, photo6 } = form3Data.photos;
    const { pola1, pola2, pola3, pola4, pola5, pola6 } = form3Data.polaroids;

    //creating a new array of photo
    const newPhoto = [photo1, photo2, photo3, photo4, photo5, photo6];
    const newPolaroid = [pola1, pola2, pola3, pola4, pola5, pola6];

    //updating photo object in the form2Data
    const newForm3 = {
      ...form3Data,
      photos: newPhoto,
      polaroids: newPolaroid,
    };

    let data = userData[0];
    let update = {
      ...data,
      profile: {
        ...data.profile,
        ...form1Data,
        ...form2Data,
        ...newForm3,
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
          form3Data={form3Data}
        />
      )}
    </>
  );
}

export default ModelsForms;
