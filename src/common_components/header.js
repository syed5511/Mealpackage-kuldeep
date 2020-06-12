import React from "react";

import Menu from "./menu";
import LoginAction from "./login_action";
import {
  Container,
  Logo,
  Left,
  Middle,
  Location,
  Content,
  Description,
  Place,
} from "./header.css";

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
          <Location>
            <Logo src="/static/images/pin.png" alt="" />
            <Content>
              <Description>We don't have delivery service to</Description>
              <Place>Skokie - 606060</Place>
            </Content>
          </Location>
        </Middle>
      </Left>
      <LoginAction />
    </Container>
  );
};

export default Header;
