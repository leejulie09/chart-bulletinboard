import BarChart from "../Component/GraphPageComponent/BarChart";
import PieChart from "../Component/GraphPageComponent/PieChart";
import LineChart from "../Component/GraphPageComponent/LineChart";
import Template from "../Template/Template";
import styled from "styled-components";

function Graph() {
  return (
    <Template>
      <Wrapper>
        <BarChart />
        <PieChart />
        <LineChart />
      </Wrapper>
    </Template>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin: 100px 40px;
  /* background-color: white; */
  gap: 10%;
`;

export default Graph;
