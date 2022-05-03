import React, { useEffect, useState } from 'react';
import axios from "axios";

export const ActivitySlider = () => {

    const [activities, setActivities] = useState([]);
    let url = "";
  
    useEffect(() => {
      axios(url).then((res) => {
        //console.log(res);
        setActivities(res.data.data.characters);
      });
    }, [url]);

    




  return (
    <div>ActivitySlider</div>
  )
}

