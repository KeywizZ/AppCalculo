import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Chart = (props) => {
  const data = {
    labels: ["Completadas", "Pendientes"],
    datasets: [
      {
        label: "Actividades completadas",
        data: [props.completed, props.remaining],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(153, 102, 255, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return <div className="chart"><Pie data={data} /></div>;
};
