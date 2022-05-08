import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../shared/context/JwtContext";
import { API } from "../../shared/services/api";
import { FiMail, FiLock } from "react-icons/fi";
import { confirmAlert } from "react-confirm-alert";

export const LoginForm = () => {
  const { setJwt } = useContext(JwtContext);
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const onSubmit = (formData) => {
    //const object = {"email":"admintest@admin.com", "password": "Admin12345@"}
    console.log("INFO: LoginForm(onSubmit) Login in");
    API.post("/users/login", formData)
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        setJwt(res.data.token);
        sessionStorage.setItem("user", JSON.stringify(res.data.user));
        if (res.data.user.role !== "STUDENT" || res.data.user.active === true) {
          navigate("/dashboard");
        } else {
          confirmAlert({
            message:
              "Este correo no esta verificado, pide a tu Tutor que revise su correo",
            buttons: [
              {
                label: "Ok",
                onClick: () => {
                  navigate("/");
                  sessionStorage.clear();
                },
              },
            ],
          });
        }
      })
      .catch((error) => {
        console.log("ERROR: LoginForm(onSubmit)", error);
        confirmAlert({
          message: "Error al iniciar sesión, revise sus credenciales.",
          buttons: [
            {
              label: "Ok",
            },
          ],
        });
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container-form">
      <div className="user-input">
        <label>
          Email <FiMail />
        </label>
        <input
          className="form-input"
          type="email"
          name="email"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
        />
      </div>
      <div className="user-input">
        <label>
          Password <FiLock />
        </label>
        <input
          className="form-input"
          type="password"
          name="password"
          {...register("password", {
            required: true,
            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
          })}
        />
      </div>
      <button className="btn">Login</button>
    </form>
  );
};
