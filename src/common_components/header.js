import React from "react";

import Menu from "./menu";
import LoginAction from "./login_action";
import { Container, Logo, Left, Middle } from "./header.css";

const menuItems = [
  {
    key: "on_menu",
    title: "ON MENU",
    url: "/on-menu",
  },
  {
    key: "pricing",
    title: "PRICING",
    url: "/pricing",
  },
];

const Header = () => {
  return (
    <Container>
      <Left>
        <Logo src="/logo.png" alt="" />
        <Middle>
          <Menu menuItems={menuItems} />
        </Middle>
      </Left>
      <LoginAction />
    </Container>
  );
};

export default Header;
