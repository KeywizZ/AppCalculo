import React from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";

export const LoginPage = () => {
  console.log("INFO: LoginPage");
  console.log(process.env.REACT_APP_BACK_URL)
  return (
    <>
      <div className="login-title">
        <h1>Iniciar Sesión</h1>
      </div>
      <div className="login-page">
        <LoginForm />
      </div>
    </>
  );
};
