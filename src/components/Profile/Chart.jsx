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
        backgroundColor: ["rgba(46, 204, 113,1.0)", "rgba(52, 73, 94,1.0)"],
        borderColor: ["rgba(39, 174, 96,1.0)", "rgba(44, 62, 80,1.0)"],
        borderWidth: 1,
      },
    ],
  };

  return <div className="chart"><Pie data={data} /></div>;
};
