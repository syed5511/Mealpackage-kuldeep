import React from "react";

import OnMenuFooter from "../../common_components/on_menu_footer";
import SlotPicker from "../../common_components/slot_picker";
import FoodItemCard from "../../common_components/food_item_card";
import useIsMobile from "../../utils/useIsMobile";
import { CardContainer } from "./styles";

const OnMenuPage = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <SlotPicker isMobile={isMobile} />
      <CardContainer>
        <FoodItemCard />
        <FoodItemCard />
        <FoodItemCard />
      </CardContainer>
      <OnMenuFooter />
    </>
  );
};

export default OnMenuPage;
