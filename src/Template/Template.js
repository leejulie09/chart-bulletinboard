import styled from "styled-components";
import LogoAtom from "./LogoAtom.template";
import LinkButtonAtom from "./LinkButtonAtom.template";
import { useRecoilState } from "recoil";
import foldAndSpreadState from "../Store";

function Template({ children }) {
  const [foldAndSpread] = useRecoilState(foldAndSpreadState);

  return (
    <Container>
      <SideBarContainer foldAndSpreadWidth={foldAndSpread ? "4rem" : "14rem"}>
        <SideBarWrapper>
          <LogoBox>
            <LogoAtom />
          </LogoBox>
          <LinkButtonBox foldAndSpreadPadding={foldAndSpread ? "10%" : "7%"}>
            <LinkButtonAtom />
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
  width: ${(props) => props.foldAndSpreadWidth};
  min-width: ${(props) => props.foldAndSpreadWidth};
  height: 100vh;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.sidebar_backgroundColor};
  border-right: ${({ theme }) => theme.stlyeSet.border};
`;
const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 40rem;
`;
const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 9%;
  padding: 5%;
`;
const LinkButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 84%;
  padding: ${(props) => props.foldAndSpreadPadding};
  border-top: ${({ theme }) => theme.stlyeSet.border};
  border-bottom: ${({ theme }) => theme.stlyeSet.border};
`;
const UserInformationBox = styled.div`
  width: 100%;
  height: 7%;
`;
const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
