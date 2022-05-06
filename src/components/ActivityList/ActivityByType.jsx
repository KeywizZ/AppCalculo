import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsArrowReturnLeft } from "react-icons/bs";

export const ActivityByType = (props) => {

  const API_REST = process.env.REACT_APP_BACK_URL;
  const url = `${API_REST}/activities`;

  const [activities, setActivities] = useState([]);
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    axios(url).then((res) => {
      console.log("INFO: (ActivityByType) Getting data from API");
      setActivities(res.data);
    });
  }, [url]);

  const [showContainer, setShowContainer] = useState(false);

  return (
    <div
      className={`container-activities-by-type ${
        showContainer ? " showContainer" : " hideContainer"
      }`}
    >
      <button
        className="toggle-type-button"
        onClick={(e) => (setShow(!show), setShowContainer(!showContainer))}
      >
        {props.type}{" "}
        {showContainer ? <BsArrowReturnLeft /> : <AiOutlineArrowDown />}
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
