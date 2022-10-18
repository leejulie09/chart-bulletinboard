import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js";

Chart.defaults.global.defaultFontColor = "white";

function BarChart() {
  return (
    <div>
      <Bar
        data={{
          labels: ["수학", "국어"],
          datasets: [
            {
              label: "남자",
              data: [103, 99.2],
              backgroundColor: "rgba(54, 162, 235)",
            },
            {
              label: "여자",
              data: [96.8, 100.9],
              backgroundColor: "rgba(255, 99, 132)",
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
            text: "2022년 수능 성별 표준 점수 평균",
            fontSize: 22,
          },
          legend: {
            labels: {
              fontSize: 18,
            },
          },
          scales: {
            yAxes: [
              {
                ticks: { min: 90 },
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default BarChart;
