import { useState } from "react";
import ClientKycForm1 from "./Client-Kyc-Form-1";
import ClientKycForm2 from "./Client-Kyc-Form-2";

import "./Client-Kyc-Forms.css";

function ClientsForms({ DomItems, userData, accountId, handleModal }) {
  const [activeForm, setActiveForm] = useState(1);
  const [form1Data, setForm1Data] = useState({
    name: "",
    url: "",
    address: "",
    state: "",
    country: "",
    bio: "",
    industry: "",
    socialMedia: {
      facebook: "",
      twitter: "",
      instagram: "",
    },
  });

  const [form2Data, setForm2Data] = useState({
    profilePic: "",
    photos: {
      photo1: "",
      photo2: "",
      photo3: "",
      photo4: "",
      photo5: "",
      photo6: "",
    },
    coverPic: "",
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

      SubmitData(data);

      setTimeout(() => {
        handleModal("kyc");
      }, 1500);
    }
  }

  //  //getting clients data
  //  useEffect(() => {
  //   axios
  //     .get("http://localhost:3500/clients")
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }, []);

  function SubmitData(form2Data) {
    //converting the photo object in the form2Data into an array
    //destructure photo object from form2Data
    const { photo1, photo2, photo3, photo4, photo5, photo6 } = form2Data.photos;

    //creating a new array of photo
    const newPhoto = [photo1, photo2, photo3, photo4, photo5, photo6];

    //updating photo object in the form2Data
    const newForm2 = {
      ...form2Data,
      photos: newPhoto,
    };

    let data = userData[0];
    let update = {
      ...data,
      profile: {
        ...data.profile,
        ...form1Data,
        ...newForm2,
      },
    };
    userData[0] = update;
    console.log(userData[0]);
  }

  return (
    <>
      {activeForm === 1 && (
        <ClientKycForm1
          DomItems={DomItems}
          collectData={collectData}
          handleNavigation={handleNavigation}
          form1Data={form1Data}
        />
      )}

      {activeForm === 2 && (
        <ClientKycForm2
          DomItems={DomItems}
          collectData={collectData}
          handleNavigation={handleNavigation}
          handleModal={handleModal}
          form2Data={form2Data}
        />
      )}
    </>
  );
}

export default ClientsForms;
