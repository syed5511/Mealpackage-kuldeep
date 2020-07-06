import React from "react";
import { string, oneOfType, node, bool } from "prop-types";
import { Button, Loader } from "./button.css";

export default function PackageButton({
  children,
  type,
  className,
  isLoading,
  disabled,
  ...rest
}) {
  return (
    <Button
      className={`${className} package_button`}
      variant="primary"
      type={type}
      disabled={isLoading || disabled}
      {...rest}
    >
      {children} {isLoading && <Loader />}
    </Button>
  );
}

PackageButton.propTypes = {
  children: oneOfType([node, string]).isRequired,
  type: string,
  className: string,
  isLoading: bool,
  disabled: bool,
};

PackageButton.defaultProps = {
  type: "button",
  className: "",
  isLoading: false,
  disabled: false,
};
