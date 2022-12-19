import React from "react";

import agentSignupImg2 from "../../../Images/agent/agent-signup2.png";
import { AgencySignupFormTwo } from "./AgencySignupFormTwo";
import { AgentSignupIntro } from "./AgentSignupIntro";

export const AgencySignupTwo = () => {
  return (
    <div className="signup-background">
      <div className="d-flex agency-signup-two__container">
        <AgentSignupIntro
          bgImage={agentSignupImg2}
          introParagraph="Personal Information Model statististics Portfolio Submit."
          paragraphMgTop="-40px"
        />
        <AgencySignupFormTwo />
      </div>
    </div>
  );
};
