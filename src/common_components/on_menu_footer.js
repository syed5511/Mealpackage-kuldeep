import React from "react";

import {
  Container,
  Cover,
  Icon,
  A,
  MainMenu,
  RoundedShape,
} from "./on_menu_footer.css";

const OnMenuFooter = ({ onIconClick }) => {
  const renderMenuItem = (icon, text) => {
    return (
      <Cover>
        <Icon src={icon} alt={text} />
        <A>{text}</A>
      </Cover>
    );
  };
  return (
    <Container>
      {renderMenuItem("/static/images/on-menu-icon.png", "On the menu")}
      <MainMenu>
        <Icon
          className="big"
          src="/static/images/mobile-main-nav-icon.png"
          alt="main menu"
          onClick={onIconClick}
        />
      </MainMenu>
      {renderMenuItem("/static/images/pricing-plan-icon.png", "Pricing Plan")}
    </Container>
  );
};

export default OnMenuFooter;
