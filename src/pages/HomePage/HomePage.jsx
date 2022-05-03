import React from "react";
import { NavLink } from "react-router-dom";

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
