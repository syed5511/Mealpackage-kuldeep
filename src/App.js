import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./common_components/footer.js";
import FooterTerms from "./common_components/footer_terms.js";
import PackageButton from "./common_components/button.js";
import PackageSignup from "./common_components/package_signup.js";
import Signin from "./common_components/signin.js";
import FollowUs from "./common_components/followus.js";
import PricingPlan from "./common_components/pricing_plan.js";
import ConfirmAndPay from "./common_components/confirm_and_pay.js";
import Steppers from "./common_components/steppers.js";
import Skeleton from "./common_components/skeleton";
import Card from "./common_components/card";

import "./App.css";

function App() {
  return (
    <>
      {/* <Steppers /> */}
      {/* <ConfirmAndPay /> */}
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
