"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnoutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 2500, 3000, 5000],
        backgroundColor: ["#0767b6", "#2265d8", "#2f91fa","#2f94fb"],
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3", "Bank 4"],
  };
    return <Doughnut data={data}
        options={{
            cutout: '60%',
            plugins: {
                legend: {
                    display: false,
                }
            }
  }}  />;
};

export default DoughnoutChart;
