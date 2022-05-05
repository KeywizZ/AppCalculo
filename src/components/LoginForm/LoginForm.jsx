import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../shared/context/JwtContext";
import { API } from "../../shared/services/api";

export const LoginForm = () => {
  const { setJwt } = useContext(JwtContext);
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const onSubmit = (e, formData) => {
    // if (formData.target.password.value )
    API.post("users/login", formData)
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        setJwt(res.data.token);
        sessionStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        alert("No se ha podido iniciar sesion");
      });

  };

  return (
    <form className="container-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="user-input">
        <label>Correo Electrónico: </label>
        <input
          type="email"
          name="email"
          placeholder="email"
          {...register("email", {
            required: true
          })}
        />
        <p>Nunca compartiremos tu correo con terceros</p>
      </div>
      <div className="pass-input">
        <label>Contraseña: </label>
        <input
          onInvalid={() => {
            alert("Contraseña no válida");
          }}
          type="password"
          name="password"
          placeholder="contraseña"
          {...register("password", {
            required: true
          })}
        />
        <button className="btn">Login</button>
      </div>
    </form>
  );
};
