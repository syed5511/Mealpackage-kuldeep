import React, { useState } from "react";

import Stepper from "../../common_components/stepper";
import steps from "../../config/steps";
import Thankyou from "../../common_components/thankyou";
import { StepperCover } from "./styles";

const ThankyouPage = ({ isMobile }) => {
  const [currentStep, setCurrentStep] = useState(3);
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
      <Thankyou />
    </>
  );
};

export default ThankyouPage;
