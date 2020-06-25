import React, { useState } from "react";
import { bool } from "prop-types";

import Stepper from "../../common_components/stepper";
import Layout from "../../common_components/layout";
import steps from "../../config/steps";
import PricingPlan from "../../common_components/pricing_plan";
import PricingLoader from "./PricingLoader";
import { StepperCover } from "./styles";
import useIsMobile from "../../utils/useIsMobile";

const PricingPage = ({ isLoading }) => {
  const isMobile = useIsMobile();
  const [currentStep, setCurrentStep] = useState(0);
  const className = isMobile ? "mobile" : "";

  const renderContent = () => {
    if (isLoading) {
      return <PricingLoader isMobile={isMobile} />;
    }
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
        <PricingPlan isMobile={isMobile} />
      </>
    );
  };
  return <Layout>{renderContent()}</Layout>;
};

PricingPage.propTypes = {
  isLoading: bool,
};

PricingPage.defaultProps = {
  isLoading: true,
};

export default PricingPage;
