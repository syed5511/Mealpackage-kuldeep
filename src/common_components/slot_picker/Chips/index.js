import React, { useState } from "react";

import Chip from "../Chip";
import "./index.css";

const Chips = ({ list: propList, onSelect, isMobile }) => {
  const [list, setList] = useState(propList);

  const setActive = (active) => {
    setList([
      ...list.map((_) => ({
        ..._,
        active: active.day_string === _.day_string,
      })),
    ]);

    onSelect(active);
  };

  return (
    <div id="slot-container">
      {list.map((item) => (
        <Chip
          key={item.day}
          {...item}
          setActive={setActive}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
};

export default Chips;
