import React from "react";
import { Line } from "react-chartjs-2";

type Data = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    backgroundColor: string;
    borderColor: string;
  }[];
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

export const LineGraph: React.FC<Data> = ({ ...props }: Data) => {
  return (
    <div className="bar-graph chart">
      <div className="chart-title">Average Page Views per Day</div>
      <Line data={props} options={options} />
    </div>
  );
};
