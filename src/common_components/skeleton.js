import React from "react";
import { string } from "prop-types";

import { Container } from "./skeleton.css";

const Skeleton = ({
  width,
  height,
  duration,
  borderRadius,
  className,
  margin,
  primaryColor,
  secondaryColor,
  ...rest
}) => (
  <Container
    {...{
      width,
      height,
      duration,
      borderRadius,
      className,
      margin,
      primaryColor,
      secondaryColor,
    }}
    {...rest}
  />
);

Skeleton.propTypes = {
  width: string,
  height: string,
  duration: string,
  borderRadius: string,
  className: string,
  primaryColor: string,
  secondaryColor: string,
};

Skeleton.defaultProps = {
  width: "240px",
  height: "48px",
  duration: "0.8s",
  borderRadius: "4px",
  className: "rect",
  primaryColor: "#f6f7f8",
  secondaryColor: "#edeef1",
};

export default Skeleton;
