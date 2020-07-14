import React from "react";

import {
  Container,
  Cover,
  Icon,
  A,
  MainMenu,
  RoundedShape,
} from "./on_menu_footer.css";

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
        <RoundedShape>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="10 10 45 15"
            width="64"
            height="64"
            fill="#29a7e8"
          >
            <path d="M12 24 L52 24 L52 16 C40 16 42 10 32 10 C24 10 22 16 12 16 Z" />
          </svg>
        </RoundedShape>
      </MainMenu>
      {renderMenuItem("/static/images/on-menu.gif", "Pricing Plan")}
    </Container>
  );
};

export default OnMenuFooter;
