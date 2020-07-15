import React, { useState } from "react";

import OnMenuFooter from "../../common_components/on_menu_footer";
import SlotPicker from "../../common_components/slot_picker";
import MainCourseCard from "../../common_components/main_course_card";
import DessertCard from "../../common_components/dessert_card";
import EmptyCartCard from "../../common_components/empty_cart_card";
import MobileBottomDrawer from "../../common_components/mobile_bottom_drawer";
import useIsMobile from "../../utils/useIsMobile";
import {
  Container,
  CardContainer,
  UpperContent,
  ExpectedTime,
  Circle,
  Detail,
  DeliveryInfo,
  Time,
  AlertContainer,
  AlertIcon,
  AlertContent,
  Body,
  CartContainer,
  SectionTitle,
  DrawerDescription,
  DrawerImage,
  DrawerContent,
} from "./styles";

const OnMenuPage = () => {
  const isMobile = useIsMobile();
  const [show, setShow] = useState(false);

  const renderAlert = () => (
    <AlertContainer>
      <AlertIcon src="/static/images/alert.gif" alt="" />
      <AlertContent>
        You're meal plan allow you to add 2 main course
      </AlertContent>
    </AlertContainer>
  );

  return (
    <Container>
      <UpperContent>
        {!isMobile && (
          <ExpectedTime>
            <Circle />
            <Detail>
              <DeliveryInfo>Delivery before</DeliveryInfo>
              <Time>01:30 pm</Time>
            </Detail>
          </ExpectedTime>
        )}
        <SlotPicker isMobile={isMobile} />
        {!isMobile && renderAlert()}
      </UpperContent>
      <SectionTitle>Main Course</SectionTitle>
      <Body>
        <CardContainer>
          <MainCourseCard />
          <MainCourseCard />
          <MainCourseCard />
          <MainCourseCard />
          <MainCourseCard />
        </CardContainer>
        {!isMobile && (
          <CartContainer>
            <EmptyCartCard />
          </CartContainer>
        )}
      </Body>
      <Body className="dessert">
        <SectionTitle className="dessert">Desserts & Salads</SectionTitle>
        <CardContainer className="dessert">
          <DessertCard />
          <DessertCard />
          <DessertCard />
          <DessertCard />
          <DessertCard />
          <DessertCard />
        </CardContainer>
      </Body>
      <MobileBottomDrawer
        show={show}
        onClose={() => {
          setShow(false);
        }}
      >
        <DrawerContent>
          <DrawerImage src="/static/images/cooking.png" alt="" />
          <DrawerDescription>
            Good food is always cooking! Go ahead, order some yummy items from
            the menu.
          </DrawerDescription>
        </DrawerContent>
      </MobileBottomDrawer>
      {isMobile && (
        <OnMenuFooter
          onIconClick={() => {
            setShow(true);
          }}
        />
      )}
    </Container>
  );
};

export default OnMenuPage;
