import React, { useState } from "react";
import { arrayOf, shape } from "prop-types";

import { UL, LI, A } from "./menu.css";
import { string } from "yup";

const Menu = ({ menuItems }) => {
  const [active, setActive] = useState("on_menu");
  return (
    <UL>
      {menuItems.map((item) => (
        <LI
          key={item.title}
          className={active === item.key ? "active" : ""}
          onClick={() => {
            setActive(item.key);
          }}
        >
          <A href={item.url}>{item.title}</A>
        </LI>
      ))}
    </UL>
  );
};

Menu.propTypes = {
  menuItems: arrayOf(
    shape({
      key: string,
      title: string,
      url: string,
    })
  ),
};

Menu.defaultProps = {
  menuItems: [],
};

export default Menu;
