import React, { useState } from "react";

import OnMenuFooter from "../../common_components/on_menu_footer";
import SlotPicker from "../../common_components/slot_picker";
import MainCourseCard from "../../common_components/main_course_card";
import DessertCard from "../../common_components/dessert_card";
import EmptyCartCard from "../../common_components/empty_cart_card";
import MobileBottomDrawer from "../../common_components/mobile_bottom_drawer";
import useIsMobile from "../../utils/useIsMobile";
import { CardContainer } from "./styles";

const OnMenuPage = () => {
  const isMobile = useIsMobile();
  const [show, setShow] = useState(false);

  return (
    <>
      <SlotPicker isMobile={isMobile} />
      <CardContainer>
        <MainCourseCard />
        <MainCourseCard />
        <MainCourseCard />
      </CardContainer>
      <CardContainer>
        <DessertCard />
        <DessertCard />
        <DessertCard />
        <DessertCard />
      </CardContainer>
      <EmptyCartCard />
      <MobileBottomDrawer
        show={show}
        onClose={() => {
          setShow(false);
        }}
      />
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Open
      </button>
      <OnMenuFooter />
    </>
  );
};

export default OnMenuPage;
