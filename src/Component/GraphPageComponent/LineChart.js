import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js";
import styled from "styled-components";

Chart.defaults.global.defaultFontColor = "white";
function LineChart() {
  const [eduData, setEduData] = useState([]);
  const [graphData, setGraphData] = useState();
  const [options, setOptions] = useState();

  useEffect(() => {
    async function fetchEduData() {
      const res = await fetch(
        "https://api.odcloud.kr/api/15080193/v1/uddi:9e0dbb8b-6eb7-4f72-ab7b-8d74844c2dc5?page=1&perPage=8&serviceKey=tOKMZ%2FmDsBNm%2FcPuRjc1o8dcTXlINXbXWOZuqonOeaTFJWG2pZezpQVsyLeAd03MX71QZSX3%2FSzNkpHSPGXJGg%3D%3D"
      );
      const fetchedData = await res.json(res);
      setEduData(fetchedData.data);
    }
    fetchEduData();
  }, []);

  useEffect(() => {
    if (eduData) {
      setGraphData({
        labels: eduData.map((level) => level["등급"]),
        datasets: [
          {
            label: "등급",
            data: eduData.map((people) => people["인원(명)"]),
            backgroundColor: "white",
            fill: false,
            borderColor: "rgba(54, 162, 235)",
          },
        ],
      });
    }
    setOptions({
      maintainAspectRatio: false,
      responsive: false,
      title: {
        display: true,
        text: "수능 국어 표준점수",
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
            ticks: { min: 17000 },
            scaleLabel: {
              display: true,
              labelString: "인원 수",
            },
          },
        ],
      },
    });
  }, [eduData]);

  return (
    <Wrapper>
      <Line data={graphData} height={400} width={400} options={options} />
    </Wrapper>
  );
}

export default LineChart;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
