import React, { useState } from "react";

import Stepper from "../../common_components/stepper";
import Layout from "../../common_components/layout";
import steps from "../../config/steps";
import ConfirmAndPay from "../../common_components/confirm_and_pay";
import { StepperCover } from "./styles";
import useIsMobile from "../../utils/useIsMobile";

const ConfirmAndPayPage = () => {
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
      <ConfirmAndPay isMobile={isMobile} isLoading={true} />
    </Layout>
  );
};

export default ConfirmAndPayPage;
