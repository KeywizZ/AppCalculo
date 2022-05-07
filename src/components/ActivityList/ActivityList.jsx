import React, { useEffect, useState } from "react";
import axios from "axios";
import { ActivityByType } from "./ActivityByType";
import { MdSquareFoot } from "react-icons/md";

export const ActivityList = () => {
  const API_REST = process.env.REACT_APP_BACK_URL;
  const url = `${API_REST}/activities`;

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios(url).then((res) => {
      console.log("INFO: (ActivityList) Getting data from API");
      setActivities(res.data);
    });
  }, []);

  const types = [...new Set(activities.map((activity) => activity.type))];

  return (
    <div className="dashboard-main-list-container">
      <div className="activity-list-title">
        <h2>
          <MdSquareFoot /> Lista de actividades
        </h2>
      </div>
      <div className="container-activities">
        {activities &&
          types.map((type) => {
            return (
              <div className="individual-box" key={JSON.stringify(type)}>
                <ActivityByType type={type} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
