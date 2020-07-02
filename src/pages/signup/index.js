import React, { useState } from "react";

import Stepper from "../../common_components/stepper";
import Layout from "../../common_components/layout";
import steps from "../../config/steps";
import Signup from "../../common_components/package_signup";
import { StepperCover } from "./styles";

const SignupPage = ({ isMobile }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const className = isMobile ? "mobile" : "";
  return (
    <Layout>
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
    </Layout>
  );
};

export default SignupPage;
