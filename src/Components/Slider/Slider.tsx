import React from "react";
import "./Slider.css";

type Props = {
  isOn: boolean;
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Slider: React.FC<Props> = ({ isOn, setIsOn }: Props) => {
  return (
    <div className="slider-container">
      <div
        className={`track ${isOn ? "changeGreen" : ""}`}
        onClick={() => setIsOn(!isOn)}
      >
        <div className={`track-ball ${isOn ? "moveRight" : "moveLeft"}`}></div>
      </div>
    </div>
  );
};
