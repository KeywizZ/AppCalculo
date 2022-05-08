import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../../shared/services/api";
import emailjs from "@emailjs/browser";
import { confirmAlert } from "react-confirm-alert";

// TODO: Generar automaticamente la contraseña y que se envie por email
// para que el usuario la cambie automaticamente

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const form = useRef();

  const onSubmit = (formData, e) => {
    let template;
    if (formData.role === "STUDENT") {
      template = "template_2wp305r";
    } else {
      template = "template_ej7aq6v";
    }

    API.post("users/register", formData)
      .then((res) => {
        console.log("INFO:(RegisterForm(onSubmit())) Response:", res.data);
        console.log(
          "INFO: RegisterForm(onSubmit(API.post)): User added to DB "
        );
        e.preventDefault();
        emailjs
          .sendForm(
            "service_q51kznk",
            `${template}`,
            form.current,
            "JtsjEFNXDwJJYbZ46"
          )
          .then(
            (result) => {
              console.log(result.text);
              confirmAlert({
                message: "Usuario registrado con éxito",
                buttons: [
                  {
                    label: "Ok",
                    onClick: () => {
                      navigate("/register");
                    },
                  },
                ],
              });
            },
            (error) => {
              console.log(error.text);
            }
          );
        navigate("/dashboard");
      })
      // TODO: Que saque por error en consola que el usuario ya existe
      .catch((err /* , res */) => {
/*         console.log("ERROR: RegisterForm(onSubmit(API.post)): Response ", res.data);  */
        console.log("ERROR: RegisterForm(onSubmit(API.post)): ", err);
      
      });
  };

  return (
    <form
      className="container-form"
      ref={form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="user-input">
        <label>Nombre de Usuario: </label>
        <input
          className="form-input"
          type="text"
          name="user_name"
          {...register("name", { required: true })}
        />
      </div>
      <div className="user-input">
        <label>Correo electrónico: </label>
        <input
          className="form-input"
          type="email"
          name="user_email"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
        />
      </div>
      <div className="user-input">
        <label>Contraseña: </label>
        <input
          className="form-input"
          type="password"
          name="user_password"
          {...register("password", {
            required: true,
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
          })}
        />
      </div>
      <div className="user-input">
        <label>Nombre Tutor/a: </label>
        <input
          className="form-input"
          type="text"
          name="guardian_name"
          {...register("guardianName")}
        />
      </div>
      <div className="user-input">
        <label>Correo electrónico Tutor/a: </label>
        <input
          className="form-input"
          type="email"
          name="guardian_email"
          {...register("guardianEmail", {
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
        />
      </div>
      <div className="user-input">
        <label>Rol: </label>
        <select className="form-input" {...register("role", { require: true })}>
          <option disabled selected value>
            selecciona una opción
          </option>
          <option>ADMIN</option>
          <option>STUDENT</option>
          <option>TEACHER</option>
        </select>
      </div>
      <div className="user-input">
        <label>Grupo / Aula: </label>
        <select
          className="form-input"
          {...register("group", { require: true })}
        >
          <option disabled selected value>
            selecciona una opción
          </option>
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
