import React from "react";
import { node, string, oneOfType } from "prop-types";

import { Container } from "./alert.css";

const Alert = ({ theme, children }) => (
  <Container className={theme}>{children}</Container>
);

Alert.propTypes = {
  children: oneOfType([string, node]).isRequired,
  theme: string,
};

Alert.defaultProps = {
  theme: "blue",
};

export default Alert;
