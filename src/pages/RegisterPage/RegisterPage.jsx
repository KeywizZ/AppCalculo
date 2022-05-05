import React from "react";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";

export const RegisterPage = () => {
  console.log("INFO: LoginPage component");

  return (
    <>
      <div className="register-title">
        <h1>Registrar Usuario</h1>
      </div>
      <div className="register-page">
        <RegisterForm />
      </div>
    </>
  );
};
