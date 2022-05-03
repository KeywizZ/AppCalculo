import React, { Route } from "react";
import { NavLink } from "react-router-dom";
import { LoginPage } from "../LoginPage/LoginPage";

export const HomePage = () => {
  return (
    <div className="homepage">
      <h1 className="bienvenida">Bienvenido a AppCálculo</h1>
      <NavLink to="/login">
        <button className="login">Iniciar Sesión</button>
      </NavLink>
      <span>¿No tienes acceso? Pide a tu centro educativo que te de credenciales de acceso</span>
    </div>
  );
};
