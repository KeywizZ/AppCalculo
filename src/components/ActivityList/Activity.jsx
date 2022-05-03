import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Activity = (params) => {
    const [questions, setQuestions] = useState([]);
    const { _id } = useParams();

    console.log("INFO: in Activity", _id);

    let url = `https://polar-castle-88468.herokuapp.com/api/activities/${_id}`;

    useEffect(() => {
        axios(url).then((res) => {
            //console.log(res.data.questions)
            setQuestions(res.data.questions.sort(() => 0.5 - Math.random()).slice(0, 10));        
        });
      }, [url]);

      console.log(questions);



  return <div>Activity</div>;
};
