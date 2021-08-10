import React, { useState } from "react";
import "./App.css";
import { Slider } from "./Components";

const App: React.FC = () => {
  const [isOn, setIsOn] = useState<boolean>(true);

  return (
    <div className="App">
      <Slider isOn={isOn} setIsOn={setIsOn} />
    </div>
  );
};

export default App;
