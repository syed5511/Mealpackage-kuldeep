import React, { useState } from "react";

import Stepper from "../../common_components/stepper";
import Layout from "../../common_components/layout";
import steps from "../../config/steps";
import SignIn from "../../common_components/signin";
import { StepperCover } from "./styles";
import useIsMobile from "../../utils/useIsMobile";

const SignInPage = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const isMobile = useIsMobile();
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
      <SignIn />
    </Layout>
  );
};

export default SignInPage;
