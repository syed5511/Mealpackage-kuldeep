import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Layout from "./common_components/layout";
import PricingPage from "./pages/pricing";
import ConfirmAndPayPage from "./pages/confirm-and-pay";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import ThankYouPage from "./pages/thankyou";
import OnMenuPage from "./pages/on-menu";
import useIsMobile from "./utils/useIsMobile";

const App = () => {
  const isMobile = useIsMobile();

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={OnMenuPage} exact />
          <Route path="/confirm-and-pay">
            <ConfirmAndPayPage isMobile={isMobile} />
          </Route>
          <Route path="/pricing">
            <PricingPage isMobile={isMobile} isLoading={false} />
          </Route>
          <Route path="/signin">
            <SignInPage isMobile={isMobile} />
          </Route>
          <Route path="/signup">
            <SignUpPage isMobile={isMobile} />
          </Route>
          <Route path="/thankyou">
            <ThankYouPage isMobile={isMobile} />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
