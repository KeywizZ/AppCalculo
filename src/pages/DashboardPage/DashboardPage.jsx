//import { useAuth0 } from '@auth0/auth0-react'
import React, { useState } from "react";
import { ActivityList } from "../../components/ActivityList/ActivityList";

export const DashboardPage = () => {
  return (
    <div className="dashboard">
      <ActivityList />
    </div>
  );
};
