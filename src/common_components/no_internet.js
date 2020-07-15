import React from "react";
import { bool } from "prop-types";

import { Container, Title, Image, Description } from "./no_internet.css";

const NoInternet = ({ isMobile }) => (
  <Container>
    <Image
      src={
        isMobile
          ? "/static/images/no-connection-mobile.png"
          : "/static/images/no-connection.png"
      }
      alt=""
    />
    <Title>No internet connection available</Title>
    <Description>
      Your device is not connect to internet, please make sure your connection
      is working.
    </Description>
  </Container>
);

NoInternet.propTypes = {
  isMobile: bool.isRequired,
};

export default NoInternet;
