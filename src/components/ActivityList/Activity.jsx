import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../../shared/services/api";
import { evaluate } from "mathjs";
import { MdArrowForwardIos } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { confirmAlert } from "react-confirm-alert";
//import "react-confirm-alert/src/react-confirm-alert.css";

export const Activity = (params) => {
  const { _id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [activityName, setActivityName] = useState();
  const [index, setIndex] = useState(0);
  const [activityCompleted, setActivityCompleted] = useState(false);
  const [correctQuestions, setCorrectQuestions] = useState(0);
  const [answer, setAnswer] = useState();
  let navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));

  console.log("INFO: loading questions from activity id: ", _id);

  const API_REST = process.env.REACT_APP_BACK_URL;
  const url = `${API_REST}/activities/${_id}`;

  useEffect(() => {
    axios(url).then((res) => {
      setQuestions(
        res.data.questions.sort(() => 0.5 - Math.random()).slice(0, 10)
      );
      setActivityName(
        `${res.data.type}: actividad n.º ` + res.data.id.substring(2)
      );
    });
  }, []);

  const evaluateQuestion = (question, answer) => {
    if (answer !== "" || answer === undefined) {
      setIndex(index + 1);
      const formattedQuestion = question.replace("x", "*");
      if (evaluate(formattedQuestion) === parseInt(answer));
      setCorrectQuestions(correctQuestions + 1);
      if (index === 9) setActivityCompleted(true);
      setAnswer("");
      console.log("INFO: (Activity(evaluateQuestion)) - question evaluated.");
    } else {
      confirmAlert({
        message: "La respuesta debe ser un número",
        buttons: [
          {
            label: "Ok",
          },
        ],
      });
    }
  };

  const resolveActivity = () => {
    if (correctQuestions > 8) {
      user.completedActivities.push(_id);
      API.patch(`users/add-activity/${user._id}`, user)
        .then((res) => {
          console.log(
            `INFO: Activity ${activityName} was successfully added to user ${user.name}`
          );
          console.log("user: ", res.data);
          if (res.data !== undefined) {
            try {
              sessionStorage.setItem("user", JSON.stringify(res.data));
            } catch (error) {
              console.error(error);
            }
          }
        })
        .catch((error) => console.log(error));
      confirmAlert({
        message: "Has superado esta actividad, enhorabuena.",
        buttons: [
          {
            label: "Ok",
          },
        ],
      });
    } else {
      confirmAlert({
        message: "No has superado la actividad, sigue practicando.",
        buttons: [
          {
            label: "Ok",
          },
        ],
      });
    }
    navigate("/dashboard");
  };

  const exit = () => {
    confirmAlert({
      title: "Seguro que deseas salir",
      message: "Se perderan las preguntas que hayas contestado",
      buttons: [
        {
          label: "Sí",
          onClick: () => navigate("/dashboard"),
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <div className="activity-card">
      <span>
        <button className="return-btn" onClick={() => exit()}>
          <BiArrowBack />
        </button>
      </span>

      <div className="header-activity">
        <div className="activity-title">{activityName}</div>
      </div>
      {!activityCompleted && (
        <div className="question-frame">
          <div className="question">{questions[index]} =</div>
          <div className="answer-group">
            <div className="answer">
              <input
                required
                type="number"
                min="0"
                max="99999"
                value={answer}
                onInput={(e) => setAnswer(e.target.value)}
              />
              <button
                className="next-btn"
                onClick={() => evaluateQuestion(questions[index], answer)}
              >
                <MdArrowForwardIos />
              </button>
            </div>
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
