import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";
// import Footer from "./common_components/footer.js";
// import FooterTerms from "./common_components/footer_terms.js";
// import PackageButton from "./common_components/button.js";
// import PackageSignup from "./common_components/package_signup.js";
// import Signin from "./common_components/signin.js";
// import FollowUs from "./common_components/followus.js";
// import PricingPlan from "./common_components/pricing_plan.js";
// import ConfirmAndPay from "./common_components/confirm_and_pay.js";
// import Header from "./common_components/header";
// import Stepper from "./common_components/stepper";
// import Skeleton from "./common_components/skeleton";
// import Card from "./common_components/card";
// import Alert from "./common_components/alert";
// import StripeCheckout from "./common_components/stripe_checkout";
// import Tnc from "./common_components/tnc";
// import Thankyou from "./common_components/thankyou";
import PricingPage from "./pages/pricing";
// import SignInPage from "./pages/signin";
import ConfirmAndPayPage from "./pages/confirm-and-pay";
// import SignUpPage from "./pages/signup";
// import ThankyouPage from "./pages/thankyou";
import useIsMobile from "./utils/useIsMobile";

import "./App.css";

// const steps = [
//   {
//     key: "select_plan",
//     title: "Select plan",
//   },
//   {
//     key: "signup",
//     title: "Sign up",
//   },
//   {
//     key: "checkout",
//     title: "Checkout",
//   },
//   {
//     key: "choose_meals",
//     title: "Choose your meals",
//   },
// ];

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const isMobile = useIsMobile();
  return (
    <PricingPage />
    // <SignInPage />
    // <SignUpPage />
    // <ConfirmAndPayPage />
    // <ThankyouPage />
    // <>
    //   <Header />
    //   <div className="cover">
    //     <Stepper
    //       steps={steps}
    //       currentStep={currentStep}
    //       setCurrentStep={setCurrentStep}
    //     />
    //   </div>
    //   <div className="stepContent">Step Content {currentStep + 1}</div>
    //   <PricingPlan />
    //   <div
    //     style={{
    //       display: "flex",
    //       justifyContent: "center",
    //     }}
    //   >
    //     <div
    //       style={{
    //         width: 643,
    //       }}
    //     >
    //       <Alert className="mid-space">
    //         You will receive future plan at $59.94 with 3 meals
    //       </Alert>
    //       <StripeCheckout />
    //       <Tnc />
    //     </div>
    //   </div>
    //   <div style={{ marginTop: 32 }}>
    //     {isMobile ? "Mobile Device" : "Desktop Device"}
    //   </div>
    //   <div style={{ marginTop: 32 }}>
    //     <Thankyou />
    //   </div>
    //   <Card>
    //     <Skeleton
    //       width="100%"
    //       height="100%"
    //       borderRadius="10px"
    //       className="rect"
    //     />
    //   </Card>
    //   <Skeleton className="circle" width="64px" />
    //   <Skeleton primaryColor="#ff9977" secondaryColor="#ff7777" width="20%" />
    //   <Skeleton
    //     className="circle"
    //     width="64px"
    //     primaryColor="#ff9977"
    //     secondaryColor="#ff7777"
    //   />
    //   <FollowUs />
    //   <Footer />
    //   <FooterTerms />
    // </>
  );
}

export default App;
