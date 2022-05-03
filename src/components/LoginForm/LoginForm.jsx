import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../../shared/services/api";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const onSubmit = (formData) => {
    API.post("users/login", formData).then((res) => {
      localStorage.setItem("token", res.data);
      navigate("/dashboard");
    });
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Correo Electrónico</label>
      <input
        type="email"
        name="email"
        {...register("email", {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        })}
      />
      <label>Contraseña</label>
      <input
        type="password"
        name="password"
        {...register("password", {
          required: true,
          pattern:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
        })}
      />
      <button>Login</button>
    </form>
  );
};