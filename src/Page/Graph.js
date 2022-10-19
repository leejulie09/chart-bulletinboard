import BarChart from "../Component/GraphPageComponent/BarChart";
import PieChart from "../Component/GraphPageComponent/PieChart";
import LineChart from "../Component/GraphPageComponent/LineChart";
import Template from "../Template/Template";
import styled from "styled-components";
import theme from "../Style/Theme";
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

export default Graph;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 100px 40px;
  gap: 10%;

  @media (max-width: 1800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media ${theme.device.tabletL} {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
