import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../../shared/services/api";


export const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  //console.log("Form", jwt);

  const onSubmit = (formData) => {
    API.post("users/register", formData) 
      .then((res) => {
        console.log(res);
        navigate("/dashboard");
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
      <div className="fomr-role">
        <label>Rol</label>
        <select {...register("role", { require: true })}>
          <option>ADMIN</option>
          <option>STUDENT</option>
          <option>GUARDIANS</option>
          <option>TEACHER</option>
        </select>
      </div>
      <button>Register</button>
    </form>
  );
};
