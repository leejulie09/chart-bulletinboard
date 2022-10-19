import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js";
import styled from "styled-components";
import theme from "../../Style/Theme";
Chart.defaults.global.defaultFontColor = "white";

function BarChart() {
  const request = async () => {
    const res = await fetch(
      "https://api.odcloud.kr/api/15080193/v1/uddi:9e0dbb8b-6eb7-4f72-ab7b-8d74844c2dc5?page=1&perPage=8&serviceKey=tOKMZ%2FmDsBNm%2FcPuRjc1o8dcTXlINXbXWOZuqonOeaTFJWG2pZezpQVsyLeAd03MX71QZSX3%2FSzNkpHSPGXJGg%3D%3D"
    );
    const json = await res.json();
    console.log(json.data);
  };
  useEffect(() => {
    request();
  }, []);

  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default BarChart;

const Wrapper = styled.div`
  @media ${theme.device.tabletL} {
    margin-bottom: 50px;
  }
`;
