import React, { useState } from "react";

import Header from "../../common_components/header";
import Stepper from "../../common_components/stepper";
import FollowUs from "../../common_components/followus";
import Footer from "../../common_components/footer";
import FooterTerms from "../../common_components/footer_terms";
import steps from "./config/steps";
import menuItems from "./config/menuItems";
import PricingPlan from "../../common_components/pricing_plan";
import { Container, StepperCover } from "./styles";
import useIsMobile from "../../utils/useIsMobile";

const PricingPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const isMobile = useIsMobile();
  const className = isMobile ? "mobile" : "";
  return (
    <Container>
      <Header isMobile={isMobile} menuItems={menuItems} />
      <StepperCover className={className}>
        <Stepper
          isMobile={isMobile}
          steps={steps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </StepperCover>
      <PricingPlan isMobile={isMobile} />
      {!isMobile && (
        <>
          <FollowUs />
          <Footer />
        </>
      )}
      <FooterTerms isMobile={isMobile} />
    </Container>
  );
};

export default PricingPage;
