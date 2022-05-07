import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

export const ActivityByType = (props) => {

  const API_REST = process.env.REACT_APP_BACK_URL;
  const url = `${API_REST}/activities`;
  const user = JSON.parse(sessionStorage.getItem("user"));
  
  const [activities, setActivities] = useState([]);
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    axios(url).then((res) => {
      console.log("INFO: (ActivityByType) Getting data from API");
      setActivities(res.data);
    });
  }, [url]);

  

  return (
    <div
      className={`container-activities-by-type ${
        show ? " showContainer " : " hideContainer"
      }`}
    >
      <button
        className="toggle-type-button"
        onClick={() => (setShow(!show))}
      >
        {props.type} {!show ? <BsChevronDown /> : <BsChevronUp />}
      </button>

      {show && (
        <div
          className="activities-card-container animate__animated animate__fadeIn"
          id={props.type}
        >
          {activities
            .filter((activity) => activity.type.includes(props.type))
            .map((activity) => {
              return (
                <div className="activity-item" key={JSON.stringify(activity)}>
                  <Link
                    to={`activities/${activity._id}`}
                    className="activity-anchor"
                  >
                    <button className={user.completedActivities.includes(activity._id) ? "activity-btn completed" : "activity-btn"}>
                      {activity.id.substring(2)}
                    </button>
                  </Link>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};
