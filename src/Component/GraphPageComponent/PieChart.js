import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js";

Chart.defaults.global.defaultFontColor = "white";

function PieChart() {
  return (
    <div>
      <Pie
        data={{
          labels: ["문과", "이과"],
          datasets: [
            {
              data: [31.4, 68.6],
              backgroundColor: ["rgba(54, 162, 235)", "rgba(255, 99, 132)"],
            },
          ],
        }}
        height={400}
        width={400}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: true,
            text: "전국 고등학교 문과 이과 비율",
            fontSize: 22,
          },
          elements: {
            arc: {
              borderWidth: 0,
            },
          },
          legend: {
            labels: {
              fontSize: 18,
            },
          },
        }}
      />
    </div>
  );
}

export default PieChart;
