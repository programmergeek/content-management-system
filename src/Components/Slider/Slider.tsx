import React from "react";
import "./Slider.css";

type Props = {
  isOn: boolean;
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Slider: React.FC<Props> = ({ isOn, setIsOn }: Props) => {
  const styles = {
    backgroundColor: isOn ? "#68E895" : "#dea5a4",
  };

  return (
    <div className="slider-container">
      <div className="track" style={styles} onClick={() => setIsOn(!isOn)}>
        <div className="track-ball"></div>
      </div>
    </div>
  );
};
