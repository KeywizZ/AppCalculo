import React, { useState, useEffect } from "react";
import { Chart } from "./Chart";
import axios from "axios";

export const Porfile = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  console.log("prfile", user);
  const [completed, setCompleted] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [activityNumber, setActivityNumber] = useState(0);

  const url = "https://polar-castle-88468.herokuapp.com/api/activities";

  useEffect(() => {
    axios(url).then((res) => {
      setActivityNumber(res.data.count());
      if (user !== undefined) {
        setCompleted(user.completedActivities.count());
      }
      setRemaining(activityNumber - completed);
    });
  }, [url, activityNumber, completed, remaining, user]);

  return (
    <div className="user-profile">
      <div className="profile-info">
        <p>
          Bienvenido {user.name}, tu cuenta es de {user.role}
        </p>

        {(user.type === "STUDENT" || "ADMIN") && (
          <div className="student-chart">
            <h3>Has completado las siguientes actividades:</h3>
            <Chart completed={completed} remaining={remaining} />
          </div>
        )}
      </div>
    </div>
  );
};
