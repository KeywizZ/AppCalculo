import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../../shared/services/api";
import { evaluate } from "mathjs";
import { Link } from "react-router-dom";

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

  //TODO: VER SI HAY MEJOR FORMA DE PONER ESTO
  let url = `https://polar-castle-88468.herokuapp.com/api/activities/${_id}`;

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
          console.log('new user',res.data)
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
    //NO SALE EL MENSAJE
    alert("RESULTADO: " + finalMessage);
    navigate("/dashboard");
  };

  return (
    <div className="activity-card">
      <Link to={"/dashboard"}>
        <button className="return-btn">Volver a lista de actividades</button>
      </Link>
      <div className="activity-title">{activityName}</div>
      {!activityCompleted && (<div className="question-frame">
        <div className="question">{questions[index]}</div>
        <div className="answer">
          <input value={answer} onInput={(e) => setAnswer(e.target.value)} />
        </div>
        <button onClick={() => evaluateQuestion(questions[index], answer)}>Siguiente</button>
      </div>

       )}
      {activityCompleted && <button onClick={() => resolveActivity()}>Enviar Actividad</button>}
    </div>
  );
};