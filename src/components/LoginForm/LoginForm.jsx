import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../shared/context/JwtContext";
import { API } from "../../shared/services/api";

export const LoginForm = () => {
  const { setJwt } = useContext(JwtContext);
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const onSubmit = (formData) => {
    API.post("users/login", formData).then((res) => {
      sessionStorage.setItem("token", res.data.token);
      setJwt(res.data.token);
      sessionStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    }).catch((error) => {
      console.log(error);
      alert("No se ha podido iniciar sesion");
    });;
    /*  console.log(formData); */
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
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
        />
        <p>Nunca compartiremos tu correo con terceros</p>
      </div>
      <div className="pass-input">
        <label>Contraseña: </label>
        <input
          type="password"
          name="password"
          placeholder="contraseña"
          {...register("password", {
            required: true,
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
          })}
        />
        <button className="btn">Login</button>
      </div>
    </form>
  );
};