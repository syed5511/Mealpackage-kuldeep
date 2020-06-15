import React from "react";
import { node, string, oneOfType } from "prop-types";

import { Container } from "./alert.css";

const Alert = ({ theme, children, className }) => (
  <Container className={`${theme} ${className}`}>{children}</Container>
);

Alert.propTypes = {
  type: oneOfType([string, node]).isRequired,
  theme: string,
};

Alert.defaultProps = {
  theme: "blue",
};

export default Alert;
