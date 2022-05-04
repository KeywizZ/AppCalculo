import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
//import { useNavigate } from "react-router-dom";
import { ButtonLogout } from "../../../components/LoginForm/ButtonLogout";
import { JwtContext } from "../../context/JwtContext";

export const HamburgerMenu = () => {
  const { jwt } = useContext(JwtContext);

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
      <ul
        id="nav-list"
        className={`menuHamb ${hamburgerOpen ? " showMenu" : " hideMenu"}`}
      >
        <li>
          <a href="/">Home</a>
        </li>
        {jwt && (
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
        )}
        <li>
          <a href="/about">Sobre Nosotros</a>
        </li>
        <li>
          <a href="/help">Ayuda</a>
        </li>
        {jwt && (
          <li className="logoutLi">
            <ButtonLogout onClick={handleToggle} />
          </li>
        )}
      </ul>
    </div>
  );
};
