import React from "react";

import { Container, Icon, Time, PinCode } from "./mobile_location_time.css";

const MobileLocationTime = () => (
  <Container>
    <Icon src="/static/images/arrival-time.png" alt="" />
    <Time>1:30 pm &#10230; </Time>
    <PinCode>60076</PinCode>
  </Container>
);

export default MobileLocationTime;
