import React, { useState } from "react";

import Chips from "./Chips";
import getMergedList from "./utils/getMergedList";

const SlotPicker = ({ isMobile }) => {
  const list = getMergedList();
  const activeObj = list.find((item) => item.active);
  const [active, setActive] = useState({
    day_string: activeObj.day_string,
    item: activeObj.item,
  });
  return <Chips list={list} onSelect={setActive} isMobile={isMobile} />;
};

export default SlotPicker;
