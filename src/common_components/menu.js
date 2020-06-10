import React from "react";

import { Container } from "./menu.css";

const menuItems = [
  {
    title: "DEMO",
    url: "/demo",
    isActive: false,
  },
  {
    title: "PRICING",
    url: "/pricing",
    isActive: true,
  },
];

const Menu = () => {
  return (
    <ul>
      {menuItems.map((item) => (
        <li key={item.title}>{item.title}</li>
      ))}
    </ul>
  );
};

export default Menu;
