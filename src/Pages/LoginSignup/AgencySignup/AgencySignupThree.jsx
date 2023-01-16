import React from "react";

import { AgentSignupIntro } from "./AgentSignupIntro";
import agentSignupImg3 from "../../../Images/agent/agent-signup3.png";
import { AgencySignupFormThree } from "./AgencySignupFormThree";

export const AgencySignupThree = ({ displayNav }) => {
  displayNav(false);
  return (
    <div className="signup-background">
      <div className="d-flex">
        <AgentSignupIntro
          bgImage={agentSignupImg3}
          introParagraph="Personal Information Model statististics Portfolio Submit"
          paragraphMgTop="-20px"
        />

        <AgencySignupFormThree />
      </div>
    </div>
  );
};
