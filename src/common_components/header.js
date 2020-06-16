import React from "react";

import Menu from "./menu";
import LoginAction from "./login_action";
import LocationShow from "./location_show";
import Popover from "./popover";
import { Container, Logo, Left, Middle, Right } from "./header.css";

const menuItems = [
  {
    key: "on_menu",
    title: "ON MENU",
    url: "#",
  },
  {
    key: "pricing",
    title: "PRICING",
    url: "#",
  },
];

const Header = () => (
  <Container>
    <Left>
      <Logo src="/logo.png" alt="" />
      <Middle>
        <Menu menuItems={menuItems} />
        <Popover
          triggerNode={
            <LocationShow
              iconSrc="/static/images/pin.png"
              description="We don't have delivery service to"
              place="Skokie - 606060"
            />
          }
        >
          We dont deliver to your location.
        </Popover>
      </Middle>
    </Left>
    <Right>
      <LoginAction isLogin />
    </Right>
  </Container>
);

export default Header;
