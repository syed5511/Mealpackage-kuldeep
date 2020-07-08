import React, { useState } from "react";
import { bool } from "prop-types";

import Stepper from "../../common_components/stepper";
import steps from "../../config/steps";
import ConfirmAndPay from "../../common_components/confirm_and_pay";
import { StepperCover } from "./styles";
import useIsMobile from "../../utils/useIsMobile";

const ConfirmAndPayPage = ({ isLoading }) => {
  const [currentStep, setCurrentStep] = useState(2);
  const isMobile = useIsMobile();
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
      <ConfirmAndPay isMobile={isMobile} isLoading={isLoading} />
    </>
  );
};

ConfirmAndPayPage.propTypes = {
  isLoading: bool,
};

ConfirmAndPayPage.defaultProps = {
  isLoading: false,
};

export default ConfirmAndPayPage;
