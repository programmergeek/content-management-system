import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PrimaryButton, SecondaryButton } from "./../../";
import "./../Auth.css";

interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}

export const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = (data) => console.log(data);

  return (
    <div className="form-container">
      <div className="form-sub-container">
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)} className="action-area">
            <p className="header">Login</p>
            <label htmlFor="username">Username</label>
            <input
              {...register("username", { required: true, maxLength: 100 })}
              type="text"
              className="field"
            />
            {errors.username && errors.username?.type === "required" && (
              <p className="error-message"> You forgot this. </p>
            )}
            {errors.username && errors.username?.type === "maxLength" && (
              <p className="error-message">
                {" "}
                Your username is just a bit too long there.{" "}
              </p>
            )}

            <label htmlFor="password">Password</label>
            <input
              {...register("password", {
                required: true,
                maxLength: 100,
                minLength: 8,
              })}
              type="password"
              className="field"
            />
            {errors.password && errors.password?.type === "required" && (
              <p className="error-message"> You forgot this. </p>
            )}
            {errors.password && errors.password?.type === "maxLength" && (
              <p className="error-message">
                {" "}
                That password might be a bit too secure.{" "}
              </p>
            )}
            {errors.password && errors.password?.type === "minLength" && (
              <p className="error-message"> A bit too short. </p>
            )}

            <PrimaryButton buttonName="Login" type="submit" />
          </form>
          <a href="/signup" className="auth-page-link">
            <SecondaryButton buttonName="Sign Up" />
          </a>
        </div>
      </div>
      <div className="colour-gradient"></div>
    </div>
  );
};
