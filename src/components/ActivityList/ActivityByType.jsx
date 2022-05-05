import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



export const ActivityByType = (props) => {
  const [activities, setActivities] = useState([]);
  const [show, setShow] = useState(false);
  let url = "https://polar-castle-88468.herokuapp.com/api/activities";
  useEffect(() => {
    axios(url).then((res) => {
      console.log("INFO: (ActivityByType) Getting data from API");
      setActivities(res.data);
    });
  }, [url]);

  return (
    <div className="container-activities-by-type">
      <button className="toggle-type-button" onClick={() => setShow(!show)}>
        {props.type}
      </button>
      {show && (
        <div
          className="activity-by-type-container activities-container-type"
          id={props.type}
        >
          {activities
            .filter((activity) => activity.type.includes(props.type))
            .map((activity) => {
              return (
                <div className="activity-card" key={JSON.stringify(activity)}>
                  <Link
                    to={`activities/${activity._id}`}
                    className="activity-anchor"
                  >
                    <button className="activity-btn">{activity.id}</button>
                  </Link>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};
