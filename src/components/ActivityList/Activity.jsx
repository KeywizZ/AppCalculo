import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../../shared/services/api";
import { evaluate } from "mathjs";
import { Link } from "react-router-dom";
import { MdOutlineSkipPrevious, MdArrowForwardIos } from "react-icons/md";

export const Activity = (params) => {
  const { _id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [activityName, setActivityName] = useState();
  const [index, setIndex] = useState(0);
  const [activityCompleted, setActivityCompleted] = useState(false);
  const [correctQuestions, setCorrectQuestions] = useState(0);
  const [finalMessage, setFinalMessage] = useState("");
  const [answer, setAnswer] = useState();
  let navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));

  console.log("INFO: loading questions from activity id: ", _id);

  const API_REST = process.env.REACT_APP_BACK_URL;
  const url = `${API_REST}/activities/${_id}`;

  useEffect(() => {
    axios(url).then((res) => {
      setQuestions(res.data.questions.sort(() => 0.5 - Math.random()).slice(0, 10));
      setActivityName(`${res.data.type}: actividad n.º ` + res.data.id.substring(2));
    });
  }, []);

  const evaluateQuestion = (question, answer) => {
    setIndex(index + 1);
    console.log(evaluate(question));
    if (evaluate(question) === parseInt(answer)) setCorrectQuestions(correctQuestions + 1);
    if (index === 9) setActivityCompleted(true);
    setAnswer("");
  };

  const resolveActivity = () => {
    if (correctQuestions > 1) {
      user.completedActivities.push(_id);
      API.patch(`users/add-activity/${user._id}`, user)
        .then((res) => {
          console.log(`INFO: Activity ${activityName} was successfully added to user ${user.name}`);
          console.log("new user", res.data);
          if (res.data.user !== undefined) {
            try {
              sessionStorage.setItem("user", JSON.stringify(res.data));
            } catch (error) {
              console.error(error);
            }
          }
        })
        .catch((error) => console.log(error));
      setFinalMessage(`Has contestado bien ${correctQuestions} preguntas, has aprobado.`);
    } else {
      setFinalMessage(`Has contestado bien ${correctQuestions} preguntas, inténtalo otra vez.`);
    }

    alert("RESULTADO: " + correctQuestions);
    navigate("/dashboard");
  };

  return (
    <div className="activity-card">
      <Link to={"/dashboard"}>
        <button className="return-btn">        <MdOutlineSkipPrevious /> </button>

      </Link>

      <div className="header-activity">
        <div className="activity-title">{activityName}</div>
      </div>
      {!activityCompleted && (
        <div className="question-frame">
          <div className="question">{questions[index]} =</div>
          <div className="answer-group">
            <div className="answer">
              <input value={answer} onInput={(e) => setAnswer(e.target.value)} />
            </div>
            <button className="next-btn" onClick={() => evaluateQuestion(questions[index], answer)}>
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
      )}
      {activityCompleted && (
        <button className="send-btn" onClick={() => resolveActivity()}>
          Enviar Actividad
        </button>
      )}
    </div>
  );
};
