import BarChart from "../Component/GraphPageComponent/BarChart";
import PieChart from "../Component/GraphPageComponent/PieChart";
import LineChart from "../Component/GraphPageComponent/LineChart";
import Template from "../Template/Template";
import styled from "styled-components";

function Graph() {
  return (
    <Template>
      <Wrapper>
        <StandardScoreBox>
          <LineChart />
        </StandardScoreBox>
        <UserScoreBox>
          <ScoreCharts>
            <BarChart />
          </ScoreCharts>
          <ScoreCharts>
            <PieChart />
          </ScoreCharts>
        </UserScoreBox>
      </Wrapper>
    </Template>
  );
}

export default Graph;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 5%;
`;
const StandardScoreBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
`;
const UserScoreBox = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin-top: 5%;
`;
const ScoreCharts = styled.div`
  width: 50%;
  height: 100%;
`;
