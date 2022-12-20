import React from "react";

import "./agency-signup.css";
import agentSignupImg1 from "../../../Images/agent/agent-signup1.png";
import { AgentSignupIntro } from "./AgentSignupIntro";
import { AgencySignupFormOne } from "./AgencySignupFormOne";

export const AgencySignupOne = ({ displayNav }) => {
  displayNav(false);
  return (
    <div className="signup-background">
      <div className="d-flex">
        <AgentSignupIntro
          bgImage={agentSignupImg1}
          heading="Almost there!"
          introParagraph="You are just moments away from awesomeness."
          divTop="-20px"
        />
        <AgencySignupFormOne />
      </div>
    </div>
  );
};
