import React from "react";
import { node } from "prop-types";

import { Container } from "./card.css";

const Card = ({ children }) => <Container>{children}</Container>;

Card.propTypes = {
  children: node,
};

Card.defaultProps = {
  children: null,
};

export default Card;
