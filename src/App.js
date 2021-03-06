import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Layout from "./common_components/layout";
import PricingPage from "./pages/pricing";
import ConfirmAndPayPage from "./pages/confirm-and-pay";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import ThankYouPage from "./pages/thankyou";
import OnMenuPage from "./pages/on-menu";
// import NoInternet from "./common_components/no_internet";
import useIsMobile from "./utils/useIsMobile";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const isMobile = useIsMobile();

  // return <NoInternet isMobile={isMobile} />;

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={OnMenuPage} exact />
          <Route path="/pricing">
            <PricingPage isMobile={isMobile} isLoading={false} />
          </Route>
          <Route path="/confirm-and-pay">
            <ConfirmAndPayPage isMobile={isMobile} />
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
