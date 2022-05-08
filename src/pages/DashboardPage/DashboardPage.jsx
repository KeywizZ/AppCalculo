//import { useAuth0 } from '@auth0/auth0-react'
import React from "react";
import { NavLink } from "react-router-dom";
import { ActivityList } from "../../components/ActivityList/ActivityList";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

export const DashboardPage = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return (
    <div className="dashboard">
      {(user.role === "ADMIN") && <h2> <MdOutlineAdminPanelSettings/> Herramientas administrador</h2>}

      {user.role === "ADMIN" && (
        <NavLink to="/register">
          <button className="aux-btn">Registrar un nuevo usuario</button>
        </NavLink>
      )}
      <NavLink to="/profile">
        <button className="aux-btn">Mi Perfil</button>
      </NavLink>

      {(user.role === "STUDENT" || "TEACHER" || "ADMIN") && <ActivityList />}
    </div>
  );
};
