import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../../shared/services/api";
import emailjs from "@emailjs/browser";

// TODO: Generar automaticamente la contraseña y que se envie por email
// para que el usuario la cambie automaticamente

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  //console.log("Form", jwt);

  const form = useRef();

  const onSubmit = (formData, e) => {
    e.preventDefault();

    emailjs.sendForm("service_q51kznk", "template_2wp305r", form.current, "JtsjEFNXDwJJYbZ46").then(
      (result) => {
        console.log(result.text);
        alert("Usuario registrado con exito");
      },
      (error) => {
        console.log(error.text);
      }
    );
    API.post("users/register", formData)
      .then((res) => {
        console.log(res);
        navigate("/dashboard");
      })
      .catch((err) => {});
    console.log(formData);
  };

  return (
    <form className="container-form" ref={form} onSubmit={handleSubmit(onSubmit)}>
      <div className="form-input">
        <label>Nombre de Usuario: </label>
        <input type="text" name="user_name" {...register("name", { required: true })} />
      </div>
      <div className="form-input">
        <label>Correo electrónico: </label>
        <input
          type="email"
          name="user_email"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
        />
      </div>
      <div className="form-input">
        <label>Contraseña: </label>
        <input
          type="password"
          name="user_password"
          {...register("password", {
            required: true,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
          })}
        />
      </div>
      <div className="form-input">
        <label>Nombre Tutor/a: </label>
        <input type="text" name="guardian_name" {...register("guardianName")} />
      </div>
      <div className="form-input">
        <label>Correo electrónico Tutor/a: </label>
        <input
          type="email"
          name="guardian_email"
          {...register("guardianEmail", {
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
        />
      </div>
      <div className="form-drop">
        <label>Rol: </label>
        <select {...register("role", { require: true })}>
          <option>ADMIN</option>
          <option>STUDENT</option>
          <option>TEACHER</option>
        </select>
      </div>
      <div className="form-drop">
        <label>Grupo / Aula: </label>
        <select {...register("group", { require: true })}>
          <option>ADMINISTRATIVO</option>
          <option>1EP</option>
          <option>2EP</option>
          <option>3EP</option>
          <option>4EP</option>
          <option>5EP</option>
          <option>6EP</option>
        </select>
      </div>
      <button className="btn">Registro</button>
    </form>
  );
};
