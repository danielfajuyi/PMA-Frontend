import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./find-model.css";
import ListingPage from "./Model-Listing-page/Listing-Page";
import ProfilePage from "./Models-Profile-page/Profile-Page";
import Data from "../../db.json";

function FindModel() {
  const [profileId, setProfileId] = useState(1);

  function handleProfile(id) {
    setProfileId(id);
  }

  function postMsg(msg) {
    Data.map((item) => (msg.id === item.id ? item.contractMessage.push(msg) : null));

    console.log(Data);
  }

  return (
    <>
      <Routes>
        <Route index element={<ListingPage handleProfile={handleProfile} Data={Data} />} />
        <Route
          path="/profile"
          element={Data.map((item) => {
            return (
              item.id === Number(profileId) && (
                <ProfilePage key={item.id} item={item} postMsg={postMsg} />
              )
            );
          })}
        />
      </Routes>
    </>
  );
}

export default FindModel;
