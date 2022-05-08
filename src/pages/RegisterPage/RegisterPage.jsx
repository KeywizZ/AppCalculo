import React from "react";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";

export const RegisterPage = () => {
  console.log("INFO: LoginPage component");
  let navigate = useNavigate();
  const exit = () => {
    confirmAlert({
      title: "¿Seguro que deseas salir?",
      message: "Se perderán todos los campos que hayas rellenado",
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
    <>
      <span>
        <button className="return-btn" onClick={() => exit()}>
          <BiArrowBack />
        </button>
      </span>
      <div className="register-title">
        <h1>Registrar Usuario</h1>
      </div>
      <div className="register-page">
        <RegisterForm />
      </div>
    </>
  );
};
