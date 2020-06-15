import React from "react";
import { string, oneOfType, node } from "prop-types";
import Button from "react-bootstrap/Button";
import "./button.css";

export default function PackageButton({ children, type }) {
  return (
    <Button className="package_button" variant="primary" type={type}>
      {children}
    </Button>
  );
}

PackageButton.propTypes = {
  children: oneOfType([node, string]).isRequired,
  type: string.isRequired,
};
