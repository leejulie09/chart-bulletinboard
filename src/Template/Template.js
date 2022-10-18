import styled from "styled-components";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { AiFillContainer } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Template({ children }) {
  const navigate = useNavigate();

  const goToGraph = () => {
    navigate("/");
  };
  const goToPoster = () => {
    navigate("/poster");
  };
  return (
    <Container>
      <SideBarContainer>
        <SideBarWrapper>
          <LogoBox></LogoBox>
          <LinkButtonBox>
            <LinkButton onClick={goToGraph}>
              <LinkButtonIcon>
                <BsFillFileEarmarkBarGraphFill />
              </LinkButtonIcon>
              <LinkButtonName>그래프</LinkButtonName>
            </LinkButton>
            <LinkButton onClick={goToPoster}>
              <LinkButtonIcon>
                <AiFillContainer />
              </LinkButtonIcon>
              <LinkButtonName>게시판</LinkButtonName>
            </LinkButton>
          </LinkButtonBox>
          <UserInformationBox></UserInformationBox>
        </SideBarWrapper>
      </SideBarContainer>
      <MainContainer>{children}</MainContainer>
    </Container>
  );
}

export default Template;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
const SideBarContainer = styled.div`
  width: 14rem;
  min-width: 14rem;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.sidebar_backgroundColor};
  border-right: ${({ theme }) => theme.stlyeSet.border};
`;
const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const LogoBox = styled.div`
  width: 100%;
  height: 9%;
`;
const LinkButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 84%;
  padding: 5%;
  border-top: ${({ theme }) => theme.stlyeSet.border};
  border-bottom: ${({ theme }) => theme.stlyeSet.border};
`;
const LinkButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 7%;
  margin-bottom: 4%;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.title_fonyColor};
  border-radius: 0.3rem;
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.main_backgroundColor};
  }
`;
const LinkButtonName = styled.div`
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
  width: 20%;
  height: 100%;
`;
const UserInformationBox = styled.div`
  width: 100%;
  height: 7%;
`;
const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
