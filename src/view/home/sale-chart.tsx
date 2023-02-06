import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    interaction: {
      intersect: false,
      axis: "x",
    },
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["", "Month 1", "Month 2", "Month 3", "Month 4", "Month 5"];

export const data = {
  labels,
  datasets: [
    {
      label: "Vested",
      data: [0, 2000, 4000, 6000, undefined, undefined],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      fill: false,
      stepped: true,
    },
    {
      label: "Not Vested",
      data: [undefined, undefined, undefined, 6000, 10000, 12000],
      borderColor: "rgb(104, 107, 105)",
      backgroundColor: "rgba(104, 107, 105, 0.5)",
      fill: false,
      stepped: true,
    },
  ],
};

export function SaleChart() {
  return <Line options={options} data={data} />;
}
