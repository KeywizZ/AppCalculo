import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../../shared/services/api";

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const onSubmit = (formData) => {
    API.post("users/register", formData)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => {});
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre de Usuario</label>
      <input
        type="text"
        name="name"
        {...register("name", { required: true })}
      />
      <label>Correo electrónico</label>
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
      <div className="">
        <label>Rol</label>
        <select {...register("rol", { require: true })}>
          <option>Admin</option>
          <option>Student</option>
          <option>Guardians</option>
        </select>
      </div>
      <button>Register</button>
    </form>
  );
};
