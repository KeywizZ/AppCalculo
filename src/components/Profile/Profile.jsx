import React, { useState, useEffect } from "react";
import { Chart } from "./Chart";
import axios from "axios";
import { GroupCharts } from "./GroupCharts";
import { Link } from "react-router-dom";
import { BiArrowBack, BiLineChart } from "react-icons/bi";

export const Profile = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [activityNumber, setActivityNumber] = useState(0);
  const [users, setUsers] = useState([]);

  const API_REST = process.env.REACT_APP_BACK_URL;
  const url = `${API_REST}/activities`;
  const url2 = `${API_REST}/users`;

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

  console.log(user.role);

  return (
    <div className="user-profile">
      <div className="profile-info">
      <Link to={"/dashboard"}>
        <button className="return-btn">
          <BiArrowBack />
        </button>
      </Link>
        <p className="info-user">
          Bienvenido <b>{user.name}</b>, tu cuenta es de {user.role}
        </p>

        {user.role === "STUDENT" && (
          <div className="chart-card">
            <h2> <BiLineChart /> Este es tu progreso en cálculo mental</h2>
            <Chart
              completed={user.completedActivities.length}
              remaining={activityNumber - user.completedActivities.length}
              total={activityNumber}
            />
          </div>
        )}
        {(user.role !== "STUDENT") && (
          <div className="all-charts-container">
            <h2> <BiLineChart/> Progreso de los alumnos</h2>
            {groups.map((group) => {
              return (
                <div className="toggle-button-container" key={JSON.stringify(group)}>
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
