import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

export const HamburgerMenu = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleToggle = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className="hamburger">
      <div className="buttonContainer">
        <button onClick={handleToggle}>
          {hamburgerOpen ? <ImCross /> : <GiHamburgerMenu />}
        </button>
      </div>
      <ul className={`menuHamb ${hamburgerOpen ? " showMenu" : " hideMenu"}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">Sobre Nosotros</a>
        </li>
        <li>
          <a href="/help">Ayuda</a>
        </li>
      </ul>
    </div>
  );
};
