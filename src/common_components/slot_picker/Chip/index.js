import React from "react";

import "./index.css";
import { render } from "@testing-library/react";

const Chip = ({
  day_string,
  day_number,
  month_string,
  active,
  today,
  item,
  setActive,
  isMobile,
}) => {
  const className = ["chip"];
  if (active) {
    className.push("active");
  }

  const renderMobileContent = () => (
    <>
      <div className="day">
        {day_string.substr(0, 3)} {day_number}
      </div>
    </>
  );

  const renderWebContent = () => (
    <>
      <div className="day">{day_string}</div>
      <div className="month">
        {day_number} {month_string}
      </div>
    </>
  );

  const renderContent = () => (
    <div
      className={className.join(" ")}
      onClick={() => setActive({ day_string, item })}
    >
      {isMobile ? renderMobileContent() : renderWebContent()}
    </div>
  );

  return renderContent();
};

export default Chip;
