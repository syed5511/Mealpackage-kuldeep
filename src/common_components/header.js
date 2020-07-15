import React, { useState } from "react";

import Menu from "./menu";
import LoginAction from "./login_action";
import LocationShow from "./location_show";
import MobileLocationTime from "./mobile_location_time";
import Popover from "./popover";
import {
  Container,
  Logo,
  Left,
  Middle,
  Right,
  Hamburg,
  Line,
  MobileNav,
  LoggedInUser,
  Close,
  LogoTempText,
} from "./header.css";

const Header = ({ isMobile, menuItems, isLogin }) => {
  const [show, setShow] = useState(false);
  const renderMenu = () => <Menu menuItems={menuItems} />;
  const renderLogin = () => <LoginAction isLogin={isLogin} />;
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
  const renderMobileNav = () => (
    <MobileNav className={show ? "show" : ""}>
      <Close
        src="/static/images/cross.png"
        alt=""
        onClick={() => {
          setShow(false);
        }}
      />
      {isLogin && <LoggedInUser>Hello Syed!</LoggedInUser>}
      {renderMenu()}
      {renderLogin()}
    </MobileNav>
  );
  const renderHamburg = () => (
    <Hamburg
      onClick={() => {
        setShow(true);
      }}
    >
      {[1, 2, 3].map((item) => (
        <Line key={item} index={item} />
      ))}
    </Hamburg>
  );
  return (
    <Container>
      <Left>
        {/* <Logo src="" alt="Logo" /> */}
        <LogoTempText>Logo</LogoTempText>
        {!isMobile && <Middle>{renderLocation()}</Middle>}
        {isMobile && <MobileLocationTime />}
        {renderHamburg()}
      </Left>
      <Right>{!isMobile ? renderLogin() : "---"}</Right>
      {renderMobileNav()}
    </Container>
  );
};

export default Header;
