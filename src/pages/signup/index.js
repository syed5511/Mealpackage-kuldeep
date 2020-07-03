import React, { useState } from "react";

import Stepper from "../../common_components/stepper";
import steps from "../../config/steps";
import Signup from "../../common_components/package_signup";
import { StepperCover } from "./styles";

const SignupPage = ({ isMobile }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const className = isMobile ? "mobile" : "";
  return (
    <>
      <StepperCover className={className}>
        <Stepper
          theme="whiteBg"
          isMobile={isMobile}
          steps={steps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </StepperCover>
      <Signup isMobile={isMobile} />
    </>
  );
};

export default SignupPage;
