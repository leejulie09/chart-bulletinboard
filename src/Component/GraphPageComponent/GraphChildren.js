import styled from "styled-components";
import Chart from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";
Chart.register(CategoryScale);
Chart.register(zoomPlugin);

function GraphChildren() {
  const [testData, setTestData] = useState([]);
  const [testData_man, setTestData_man] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://api.odcloud.kr/api/15080193/v1/uddi:9e0dbb8b-6eb7-4f72-ab7b-8d74844c2dc5?page=1&perPage=8&serviceKey=tOKMZ%2FmDsBNm%2FcPuRjc1o8dcTXlINXbXWOZuqonOeaTFJWG2pZezpQVsyLeAd03MX71QZSX3%2FSzNkpHSPGXJGg%3D%3D"
      );
      const json = await res.json();
      console.log(json);
      setTestData(json.data.map((i) => i["구분 점수"]));
      setTestData_man(json.data.map((i) => i["인원(명)"]));
    })();
  }, []);

  const data = {
    labels: [200, ...testData, 0],
    datasets: [
      {
        data: [0, ...testData_man, 0],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        lineTension: 0.4,
      },
    ],
  };

  return (
    <Container>
      <Wrapper>
        <Line
          data={data}
          options={{
            responsive: true,
            plugins: {
              zoom: {
                pan: { enabled: true, mode: "x" },
                zoom: {
                  mode: "x",
                  wheel: { enabled: true },
                },
              },
              legend: { display: false },
            },
            scales: {
              xAxes: { grid: { color: "#484752" } },
              yAxes: {
                grid: { color: "#484752" },
                ticks: {
                  maxTicksLimit: 10,
                },
              },
            },
          }}
        />
      </Wrapper>
    </Container>
  );
}

export default GraphChildren;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  min-height: 100%;
  padding: 2% 5%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  min-height: 90vh;
`;
