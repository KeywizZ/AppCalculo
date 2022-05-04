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

  const setVisivility = (id) => {
    try {
      if (document.getElementById(id).style.visibility === "show") document.querySelector(id).style.visibility = "hidden";
      else document.querySelector(id).style.visibility = "show";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container-activities">
        <h2>Lista de actividades</h2>
        {activities &&
          types.map((item) => {
            return (
              <>
                <button className="list-activity-button" onClick={document.getElementById({item}).hidden = !document.getElementById({item}).hidden}>
                  {item}
                </button>
                <div key={JSON.stringify(item)} className="activities" id={item}>
                  {activities
                    .filter((activity) => activity.type.includes(item))
                    .map((activity) => {
                      return (
                        <div className="activity-card" key={JSON.stringify(activity)}>
                          <Link to={`activities/${activity._id}`} className="activity-anchor">
                            <button className="activity-btn">{activity.id}</button>
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};
