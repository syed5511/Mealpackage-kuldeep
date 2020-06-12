import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./common_components/footer.js";
import FooterTerms from "./common_components/footer_terms.js";
import PackageButton from "./common_components/button.js";
import PackageSignup from "./common_components/package_signup.js";
import Signin from "./common_components/signin.js";
import FollowUs from "./common_components/followus.js";
import PricingPlan from "./common_components/pricing_plan.js";
import ConfirmAndPay from "./common_components/confirm_and_pay.js";
import Header from "./common_components/header";
import Steppers from "./common_components/steppers.js";
import Stepper from "./common_components/_stepper";
import Skeleton from "./common_components/skeleton";
import Card from "./common_components/card";

import "./App.css";

const steps = [
  {
    key: "select_plan",
    title: "Select plan",
  },
  {
    key: "signup",
    title: "Sign up",
  },
  {
    key: "checkout",
    title: "Checkout",
  },
  {
    key: "choose_meals",
    title: "Choose your meals",
  },
];

function App() {
  const [currentStep, setCurrentStep] = useState(2);
  return (
    <>
      {/* <Steppers /> */}
      {/* <ConfirmAndPay /> */}
      <Header />
      <div className="cover">
        <Stepper
          steps={steps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </div>
      <div className="stepContent">Step Content {currentStep + 1}</div>
      <PricingPlan />
      <Card>
        <Skeleton
          width="100%"
          height="100%"
          borderRadius="10px"
          className="rect"
        />
      </Card>
      <Skeleton className="circle" width="64px" />
      <Skeleton primaryColor="#ff9977" secondaryColor="#ff7777" width="20%" />
      <Skeleton
        className="circle"
        width="64px"
        primaryColor="#ff9977"
        secondaryColor="#ff7777"
      />
      {/* <Signin/> */}
      {/* <PackageSignup /> */}
      <FollowUs />
      <Footer />
      <FooterTerms />
    </>
  );
}

export default App;
