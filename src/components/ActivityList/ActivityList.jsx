import React, { useEffect, useState } from "react";
import axios from "axios";
import { ActivityByType } from "./ActivityByType";

export const ActivityList = () => {
  const [activities, setActivities] = useState([]);
  let url = "https://polar-castle-88468.herokuapp.com/api/activities";

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
