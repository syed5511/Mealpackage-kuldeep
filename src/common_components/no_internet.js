import React from "react";

import { Container, Title, Image, Description } from "./no_internet.css";

const NoInternet = () => (
  <Container>
    <Image src="/static/images/no-internet.png" alt="" />
    <Title>No internet connection available</Title>
    <Description>
      Your device is not connect to internet, please make sure your connection
      is working.
    </Description>
  </Container>
);

export default NoInternet;
