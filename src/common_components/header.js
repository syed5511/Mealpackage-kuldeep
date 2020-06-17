import React from "react";

import Menu from "./menu";
import LoginAction from "./login_action";
import LocationShow from "./location_show";
import Popover from "./popover";
import { Container, Logo, Left, Middle, Right } from "./header.css";

const Header = ({ isMobile, menuItems }) => {
  const renderMenu = () => <Menu menuItems={menuItems} />;
  const renderLogin = () => <LoginAction isLogin />;
  const renderLocation = () => (
    <>
      {renderMenu()}
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
    </>
  );
  return (
    <Container>
      <Left>
        <Logo src="/logo.png" alt="" />
        {!isMobile && <Middle>{renderLocation()}</Middle>}
      </Left>
      <Right>{!isMobile ? renderLogin() : "---"}</Right>
    </Container>
  );
};

export default Header;
