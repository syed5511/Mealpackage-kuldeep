import React from "react";

import {
  Container,
  Content,
  Footer,
  Body,
  ItemName,
  ItemDescription,
  IconContainer,
  Icon,
  AddAction,
} from "./styles";

const MainCourseCard = () => {
  return (
    <Container>
      <Content />
      <Footer>
        <Body>
          <ItemName>Chicken Chicken Chicken</ItemName>
          <ItemDescription>with red chili sauce</ItemDescription>
          <IconContainer>
            <Icon />
            <Icon />
            <Icon />
            <Icon />
          </IconContainer>
        </Body>
        <AddAction>+</AddAction>
      </Footer>
    </Container>
  );
};

export default MainCourseCard;
