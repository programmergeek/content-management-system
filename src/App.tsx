import React from "react";
import "./App.css";
import { PrimaryButton, SecondaryButton } from "./Components";

const App: React.FC = () => {
  return (
    <div className="App">
      {" "}
      <PrimaryButton buttonName="Login" type="submit" />{" "}
      <SecondaryButton buttonName="Create an account" />{" "}
    </div>
  );
};

export default App;
