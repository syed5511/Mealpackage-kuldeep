import React from "react";

import { Container, SubHeading, Title, Icon, Button } from "./thankyou.css";

const Thankyou = () => (
  <Container>
    <SubHeading>
      Your first meal package will expire on 15/10/2020 consume all your 3 meals
    </SubHeading>
    <Title>
      <Icon src="/static/images/confirm.png" alt="" /> Thanks for signing up,
      Ikram Ul Haq!
    </Title>
    <Button>Place you're first meal order</Button>
  </Container>
);

export default Thankyou;
