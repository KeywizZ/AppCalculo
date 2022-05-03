import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const ActivityList = () => {
  const [activities, setActivities] = useState([]);
  let url = "https://polar-castle-88468.herokuapp.com/api/activities";

  useEffect(() => {
    axios(url).then((res) => {
      console.log("INFO: Getting data from API");
      setActivities(res.data);
    });
  }, [url]);

  const types = [...new Set(activities.map((item) => item.type))];
  console.log(types);

  return (
    <>
      <div className="container-activities">
        {activities &&
          types.map((item) => {
            return (
              <div key={JSON.stringify(item)}>
                <div className="type-title">{item}</div>
                <div className="activities-container-type">
                  {activities
                    .filter((activity) => activity.type.includes(item))
                    .map((activity) => {
                      return (
                        <div className="activity-card" key={JSON.stringify(activity)}>
                          <Link to={`api/activities/${activity._id}`}>
                            <button>{activity.id}</button>
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
