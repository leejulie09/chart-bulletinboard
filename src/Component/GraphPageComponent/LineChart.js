import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js";

Chart.defaults.global.defaultFontColor = "white";
function LineChart() {
  return (
    <div>
      <Line
        data={{
          labels: ["1994", "2000", "2005", "2010", "2015", "2020"],
          datasets: [
            {
              label: "단위: 만 명",
              data: [71.6, 86.8, 57.4, 63.8, 59.5, 48.5],
              backgroundColor: "white",
              fill: false,
              borderColor: "rgba(54, 162, 235)",
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
            text: "전국 수능 응시생 추이",
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
                ticks: { min: 45 },
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default LineChart;
