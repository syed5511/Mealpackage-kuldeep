import React, { useState } from "react";

import Stepper from "../../common_components/stepper";
import Layout from "../../common_components/layout";
import steps from "../../config/steps";
import Thankyou from "../../common_components/thankyou";
import { StepperCover } from "./styles";
import useIsMobile from "../../utils/useIsMobile";

const ThankyouPage = () => {
  const [currentStep, setCurrentStep] = useState(3);
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
      <Thankyou />
    </Layout>
  );
};

export default ThankyouPage;
