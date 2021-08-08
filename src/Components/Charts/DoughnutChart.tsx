import React from "react";
import { Doughnut } from "react-chartjs-2";

interface Dataset {
  label: string;
  backgroundColor: string;
  borderColor: string;
  data: number;
}

interface Data {
  labels: string;
  datasets: Dataset[];
}

export const DoughnutChart: React.FC<Data> = ({ ...props }: Data) => {
  return (
    <div className="doughnut-chart chart">
      <div className="chart-title"> Views per Post </div>
      <Doughnut data={props.datasets} />
    </div>
  );
};
