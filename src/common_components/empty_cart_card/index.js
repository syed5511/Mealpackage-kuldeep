import React from "react";

import { Container, Image, Title, Description } from "./styles";

const EmptyCartCard = () => {
  return (
    <Container>
      <Image src="/static/images/cooking.png" alt="" />
      <Title>Your Cart is Empty</Title>
      <Description>
        Good food is always cooking! Go ahead, order some yummy items from the
        menu.
      </Description>
    </Container>
  );
};

export default EmptyCartCard;
