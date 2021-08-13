import React, { useState } from "react";
import "./Slider.css";

type Props = {
  isOn: boolean;
};

export const Slider: React.FC<Props> = ({ isOn }: Props) => {
  const [state, setState] = useState(isOn);
  return (
    <div className="slider-container">
      <div
        className={`track ${state ? "changeGreen" : ""}`}
        onClick={() => setState(!state)}
      >
        <div className={`track-ball ${state ? "moveRight" : "moveLeft"}`}></div>
      </div>
    </div>
  );
};
