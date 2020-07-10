import React from "react";

import { Container, Cover, Icon, A, MainMenu } from "./on_menu_footer.css";

const OnMenuFooter = () => {
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
      {renderMenuItem("/static/images/on-menu.gif", "On the menu")}
      <MainMenu>
        <Icon
          className="big"
          src="/static/images/restaurant@2x.png"
          alt="main menu"
        />
      </MainMenu>
      {renderMenuItem("/static/images/on-menu.gif", "Pricing Plan")}
    </Container>
  );
};

export default OnMenuFooter;
