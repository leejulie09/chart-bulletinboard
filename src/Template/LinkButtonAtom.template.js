import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useRecoilState } from "recoil";
import foldAndSpreadState from "../Store";
import LinkArray from "./LinkMockDataArray";

function LinkButtonAtom() {
  const [foldAndSpread, setFoldAndSpread] = useRecoilState(foldAndSpreadState);
  const { pathname } = window.location;
  const navigate = useNavigate();
  const foldAndSpreadFunction = () => {
    setFoldAndSpread((prev) => !prev);
  };

  return (
    <Container>
      {foldAndSpread && (
        <FoldButtonBox
          foldAndSpreadWidth={foldAndSpread ? "100%" : "15%"}
          foldAndSpreadHeight={foldAndSpread ? "5%" : "100%"}
          foldAndSpreadMagin={foldAndSpread ? "15%" : "0%"}
        >
          <FoldButton onClick={foldAndSpreadFunction}>
            <AiOutlineDoubleRight />
          </FoldButton>
        </FoldButtonBox>
      )}
      {LinkArray.map((i, index) => (
        <LinkButton
          key={index}
          onClick={() => {
            navigate(i.path);
          }}
          foldAndSpreadWidth={foldAndSpread ? "100%" : "20%"}
          foldAndSpreadMagin={foldAndSpread ? "15%" : "4%"}
          color={pathname === i.path ? "#827bf6" : "#c1c0ce"}
          hover={pathname === i.path ? "#191825" : "none"}
        >
          <LinkButtonIcon>{i.icon}</LinkButtonIcon>
          {!foldAndSpread && <LinkButtonName>{i.name}</LinkButtonName>}
        </LinkButton>
      ))}
    </Container>
  );
}

export default LinkButtonAtom;

const Container = styled.div`
  @media ${({ theme }) => theme.device.tabletL} {
    flex-direction: row;
    width: 100%;
    height: 100%;
    min-height: 100%;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const FoldButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.foldAndSpreadWidth};
  height: ${(props) => props.foldAndSpreadHeight};
  margin-bottom: ${(props) => props.foldAndSpreadMagin};
`;
const LinkButton = styled.div`
  @media ${({ theme }) => theme.device.tabletL} {
    flex-direction: row;
    width: 100%;
    height: 100%;
    min-height: 100%;
    margin: 0% 10%;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 7%;
  margin-bottom: ${(props) => props.foldAndSpreadMagin};
  font-size: 1.2rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.hover};
  border-radius: 0.3rem;

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.main_backgroundColor};
  }
`;
const LinkButtonName = styled.div`
  @media ${({ theme }) => theme.device.tabletL} {
    width: 50%;
    height: 100%;
    min-height: 100%;
    margin: 0% 1%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  height: 100%;
  padding: 0% 5%;
  font-size: 1rem;
`;
const LinkButtonIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.foldAndSpreadWidth};
  height: 100%;
`;
const FoldButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.colors.title_fonyColor};
  border: ${({ theme }) => theme.stlyeSet.border};
  border-radius: 0.3rem;
  :hover {
    cursor: pointer;
  }
`;
