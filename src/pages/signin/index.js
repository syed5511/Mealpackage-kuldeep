import React, { useState } from "react";

import Stepper from "../../common_components/stepper";
import steps from "../../config/steps";
import SignIn from "../../common_components/signin";
import { StepperCover } from "./styles";

const SignInPage = ({ isMobile }) => {
  const [currentStep, setCurrentStep] = useState(2);
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
      <SignIn />
    </>
  );
};

export default SignInPage;
