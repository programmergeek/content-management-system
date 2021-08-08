import React from "react";
import { Doughnut } from "react-chartjs-2";

type Data = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
};

export const DoughnutChart: React.FC<Data> = (data: Data) => {
  return (
    <div className="doughnut-chart chart">
      <div className="chart-title"> Views per Post </div>
      <Doughnut data={data} />
    </div>
  );
};
