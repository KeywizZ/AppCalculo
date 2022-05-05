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
 /*    console.log(e.target.elements.name.value);
    console.log(e.target.name.value) ; */

     emailjs
      .sendForm(
        "service_q51kznk",
        "template_2wp305r",
        form.current,
        "JtsjEFNXDwJJYbZ46"
      )
      .then(
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
      console.log(formData)
  };

  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre de Usuario</label>
      <input
        type="text"
        name="user_name"
        {...register("user_name", { required: true })}
      />
      <label>Correo electrónico</label>
      <input
        type="email"
        name="user_email"
        {...register("user_email", {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        })}
      />
      <label>Contraseña</label>
      <input
        type="password"
        name="user_password"
        {...register("user_password", {
          required: true,
          pattern:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
        })}
      />
      <div className="">
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
