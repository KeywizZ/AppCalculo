import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Chart } from "./Chart";

export const GroupCharts = (props) => {
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);
    let url = "https://polar-castle-88468.herokuapp.com/api/users";
    useEffect(() => {
      axios(url).then((res) => {
        console.log("INFO: (GroupCharts) Getting data from API");
        setUsers(res.data);
      });
    }, [url]);
  
    return (
      <>
        <button className="toggle-button" onClick={() => setShow(!show)}>
          {props.group}
        </button>
        {show && (
          <div className="group-charts" id={props.group}>
            {users
              .filter((user) => user.group.includes(props.group))
              .filter((user) => user.role.includes('STUDENT'))
              .map((user) => {
                return (
                  <div className="student-chart-mini" key={JSON.stringify(user)}>
                      <h4>{user.name}</h4>
                      <Chart completed={user.completedActivities.length} remaining={props.total - user.completedActivities.length} />
                  </div>
                );
              })}
          </div>
        )}
      </>
    );
}
