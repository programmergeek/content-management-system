import React from "react";
import "./Button.css";

interface Props {
  buttonName: string;
  type?: "submit";
}

export const PrimaryButton: React.FC<Props> = ({ buttonName, type }: Props) => {
  return (
    <button type={type} className="primary-btn btn">
      {" "}
      {buttonName}{" "}
    </button>
  );
};

export const SecondaryButton: React.FC<Props> = ({ buttonName }: Props) => {
  return <button className="secondary-btn btn"> {`>${buttonName}`} </button>;
};
