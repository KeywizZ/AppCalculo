import React, { useState, useEffect } from "react";
import { Chart } from "./Chart";
import axios from "axios";

export const Porfile = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [completed, setCompleted] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [activityNumber, setActivityNumber] = useState(0);

  const url = "https://polar-castle-88468.herokuapp.com/api/activities";

  useEffect(() => {
    axios(url).then((res) => {
      setActivityNumber(res.data.length);
      if (user) {
        console.log('profile',user.completedActivities)
        setCompleted(user.completedActivities.length);
      }
      setRemaining(activityNumber - completed);
    });
    console.log('completed:', completed, "remaining: ", remaining)
  }, [url, activityNumber, completed, remaining, user]);

  return (
    <div className="user-profile">
      <div className="profile-info">
        <p className="info-user">
          Bienvenido <b>{user.name}</b>, tu cuenta es de {user.role}
        </p>

        {(user.type === "STUDENT" || "ADMIN") && (
          <div className="chart-card">
            <h3>Este es tu progreso en cálculo mental</h3>
            <Chart completed={completed} remaining={remaining} />
          </div>
        )}
      </div>
    </div>
  );
};
