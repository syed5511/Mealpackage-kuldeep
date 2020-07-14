import React from "react";

import { Container, Backdrop, Drawer, Done } from "./styles";

const MobileBottomDrawer = ({ show, onClose }) => {
  return (
    <Container className={show ? "show" : ""}>
      <Backdrop className={show ? "show" : ""} />
      <Drawer className={show ? "show" : ""}>
        <Done onClick={onClose}>Done</Done>Abc
      </Drawer>
    </Container>
  );
};

export default MobileBottomDrawer;
