import React from "react";
import "./Button.css";

interface Props {
  buttonName: string;
  type?: "submit";
}

export const PrimaryButton: React.FC<Props> = ({ buttonName, type }: Props) => {
  return <button type={type}> {buttonName} </button>;
};
