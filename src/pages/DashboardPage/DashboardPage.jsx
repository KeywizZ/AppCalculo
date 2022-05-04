//import { useAuth0 } from '@auth0/auth0-react'
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ActivityList } from "../../components/ActivityList/ActivityList";

export const DashboardPage = () => {
  return (
    <div className="dashboard">
      <ActivityList />
      <NavLink to="/register">
        <button className="login">Registrar un nuevo usuario</button>
      </NavLink>
    </div>
    
  );
};
