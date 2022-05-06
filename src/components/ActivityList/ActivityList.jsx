import React, { useEffect, useState } from "react";
import axios from "axios";
import { ActivityByType } from "./ActivityByType";

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
    <div className="container-activities">
      <h2>Lista de actividades</h2>
      {activities &&
        types.map((type) => {
          return (
            <div key={JSON.stringify(type)}>
              <ActivityByType type={type} />
            </div>
          );
        })}
    </div>
  );
};
