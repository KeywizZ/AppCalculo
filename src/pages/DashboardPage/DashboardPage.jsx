//import { useAuth0 } from '@auth0/auth0-react'
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ActivityList } from "../../components/ActivityList/ActivityList";
const user = JSON.parse(localStorage.getItem("user"));

export const DashboardPage = () => {
  return (
    <div className="dashboard">
      {user.role === "STUDENT" && <ActivityList />}
      {user.role === "ADMIN" && (
        <NavLink to="/register">
          <button className="login">Registrar un nuevo usuario</button>
        </NavLink>
      )}
    </div>
  );
};
