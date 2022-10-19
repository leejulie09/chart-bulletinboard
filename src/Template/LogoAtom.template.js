import styled from "styled-components";
import LogoImage from "../asset/Logo.png";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { useRecoilState } from "recoil";
import foldAndSpreadState from "../Store";

function LogoAtom() {
  const [foldAndSpread, setFoldAndSpread] = useRecoilState(foldAndSpreadState);
  const foldAndSpreadFunction = () => {
    setFoldAndSpread((prev) => !prev);
  };

  return (
    <Container>
      <LogoImg
        foldAndSpreadWidth={foldAndSpread ? "90%" : "25%"}
        backgroundURL={LogoImage}
      ></LogoImg>
      {!foldAndSpread && (
        <>
          <LogoName> 위닝아이 </LogoName>
          <FoldButtonBox
            foldAndSpreadWidth={foldAndSpread ? "100%" : "15%"}
            foldAndSpreadHeight={foldAndSpread ? "5%" : "100%"}
            foldAndSpreadMagin={foldAndSpread ? "15%" : "0%"}
          >
            <FoldButton onClick={foldAndSpreadFunction}>
              <AiOutlineDoubleLeft />
            </FoldButton>
          </FoldButtonBox>
        </>
      )}
    </Container>
  );
}

export default LogoAtom;

const Container = styled.div`
  @media ${({ theme }) => theme.device.tabletL} {
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const LogoImg = styled.div`
  @media ${({ theme }) => theme.device.tabletL} {
    width: 9rem;
    height: 100%;
  }
  @media only screen and (max-height: 720px) {
    width: 5rem;
  }
  @media only screen and (max-height: 600px) {
    width: 4rem;
  }
  width: ${(props) => props.foldAndSpreadWidth};
  height: 100%;
  background-image: url(${(props) => props.backgroundURL});
  background-repeat: no-repeat;
  background-size: cover;
`;
const LogoName = styled.div`
  @media ${({ theme }) => theme.device.tabletL} {
    display: none;
  }
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5%;
  width: 60%;
  height: 100%;
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
const FoldButtonBox = styled.div`
  @media ${({ theme }) => theme.device.tabletL} {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.foldAndSpreadWidth};
  height: ${(props) => props.foldAndSpreadHeight};
  margin-bottom: ${(props) => props.foldAndSpreadMagin};
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
