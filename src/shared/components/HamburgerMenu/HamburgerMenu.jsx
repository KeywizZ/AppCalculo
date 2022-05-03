/* import React from "react";
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
 */

import React from "react";
import { slide as Menu } from "react-burger-menu";

export const HamburgerMenu = () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        Salads
      </a>
      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>
      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
  );
};
