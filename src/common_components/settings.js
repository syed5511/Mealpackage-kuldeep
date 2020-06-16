import React from "react";

import {
  Container,
  Top,
  Links,
  Link,
  Logout,
  Bottom,
  HR,
} from "./settings.css";

const Settings = () => {
  return (
    <Container>
      <Top>
        <Links>
          <Link>Order History</Link>
          <Link>Delivery Address</Link>
          <Link>Subscription</Link>
        </Links>
        <Logout>Logout</Logout>
      </Top>
      <HR />
      <Bottom>
        Available Plates <span>5</span>
      </Bottom>
    </Container>
  );
};

export default Settings;
