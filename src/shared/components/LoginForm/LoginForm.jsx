import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../context/JwtContext";

const Loginform = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const { setJwt } = useContext(JwtContext);

  const onSubmit = (formData) => {
    API.post("user/login", formData).then((res) => {
      localStorage.setItem("token", res.data);
      setJwt(res.data);
      navigate("/home");
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="login">
        <label className="titleEmail">Email</label>
        <input
          type="email"
          name="email"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
        />
        <div className="password">
          <label className="titlePassword">Password</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: true,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
            })}
          />
        </div>
        <button className="btnLogin">Login</button>
      </div>
    </form>
  );
};

export default Loginform;
