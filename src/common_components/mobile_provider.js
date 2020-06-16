import React, { createContext } from "react";
import { node } from "prop-types";
import { isMobile } from "react-device-detect";

export const MobileContext = createContext();

const MobileProvider = ({ children }) => (
  <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
);

MobileProvider.propTypes = {
  children: node.isRequired,
};

export default MobileProvider;
