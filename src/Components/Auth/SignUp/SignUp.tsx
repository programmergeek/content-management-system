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

export const SignUp: React.FC = () => {
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
            <p className="header">Sign Up</p>
            <div className="full-name">
              <div className="name">
                <label htmlFor="firstName">First Name</label>
                <input
                  {...register("firstName", { required: true, maxLength: 100 })}
                  type="text"
                  className="field"
                  id="first-name"
                />
                {errors.firstName && errors.firstName.type === "required" && (
                  <p className="error-message"> You forgot this. </p>
                )}
                {errors.firstName && errors.firstName.type === "maxLength" && (
                  <p className="error-message">
                    {" "}
                    Your name is too powerful for us to handle.{" "}
                  </p>
                )}
              </div>

              <div className="name">
                <label htmlFor="lastName">Last Name</label>
                <input
                  {...register("lastName", { required: true, maxLength: 100 })}
                  type="text"
                  className="field"
                  id="last-name"
                />
                {errors.lastName && errors.lastName.type === "required" && (
                  <p className="error-message"> You forgot this. </p>
                )}
                {errors.lastName && errors.lastName.type === "maxLength" && (
                  <p className="error-message">
                    {" "}
                    Your name is too powerful for us to handle.{" "}
                  </p>
                )}
              </div>
            </div>
            <label htmlFor="email">Email</label>
            <input
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              })}
              type="text"
              className="field"
            />
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
            <PrimaryButton buttonName="Sign Up" type="submit" />
          </form>
          <a href="/login" className="auth-page-link">
            <SecondaryButton buttonName="Create account" />
          </a>
        </div>
      </div>
      <div className="colour-gradient"></div>
    </div>
  );
};
