import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";

export const HamburgerMenu = () => {
  return (
    <Menu>
      <a href="/about">Sobre Nosotros</a>
      <a href="/help">Ayuda</a>
      <a href="/">AS</a>
    </Menu>
  );
};
