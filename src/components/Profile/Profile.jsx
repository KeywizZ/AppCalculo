import React, { useState, useEffect } from "react";
import { Chart } from "./Chart";
import axios from "axios";
import { GroupCharts } from "./GroupCharts";

export const Profile = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [activityNumber, setActivityNumber] = useState(0);
  const [users, setUsers] = useState([]);

  const url = "https://polar-castle-88468.herokuapp.com/api/activities";
  const url2 = "https://polar-castle-88468.herokuapp.com/api/users";

  useEffect(() => {
    axios(url).then((res) => {
      setActivityNumber(res.data.length);
    });
    axios(url2).then((res) => {
      console.log("INFO: (Profile) Getting data from API");
      setUsers(res.data);
    });
  }, []);

  const groups = [...new Set(users.map((user) => user.group))];
  groups.sort();
  groups.pop();

  return (
    <div className="user-profile">
      <div className="profile-info">
        <p className="info-user">
          Bienvenido <b>{user.name}</b>, tu cuenta es de {user.role}
        </p>

        {user.type === "STUDENT" && (
          <div className="chart-card">
            <h3>Este es tu progreso en cálculo mental</h3>
            <Chart completed={user.completedActivities.length} remaining={activityNumber - user.completedActivities.length} total={activityNumber} />
          </div>
        )}
        {(user.type === "ADMIN" || "TEACHER") && (
          <div>
            <h3>Progreso de los alumnos</h3>
            {groups.map((group) => {
              return (
                <div key={JSON.stringify(group)}>
                  <GroupCharts group={group} total={activityNumber} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};