import React from "react";
import { Menu } from "semantic-ui-react";

function HeaderMenu() {
  return (
    <Menu fixed="top" borderless size="large">
      <Menu.Item header>Ledge LLC Tutoring</Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item href="#services">Services</Menu.Item>
        <Menu.Item href="#about">About</Menu.Item>
        <Menu.Item href="#contact">Contact</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default HeaderMenu;
