import styled from "styled-components";
import { useEffect } from "react";

<<<<<<< HEAD
function GraphChildren() {
=======

function GraphChildren() {

>>>>>>> main
  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://api.odcloud.kr/api/15080193/v1/uddi:9e0dbb8b-6eb7-4f72-ab7b-8d74844c2dc5?page=1&perPage=8&serviceKey=tOKMZ%2FmDsBNm%2FcPuRjc1o8dcTXlINXbXWOZuqonOeaTFJWG2pZezpQVsyLeAd03MX71QZSX3%2FSzNkpHSPGXJGg%3D%3D"
      );
      const json = await res.json();
      console.log(json);
<<<<<<< HEAD
    })();
  }, []);

  return (
    <Container>
      <Wrapper></Wrapper>
=======
    
    })();
  }, []);



  return (
    <Container>
      <Wrapper>
    
      </Wrapper>
>>>>>>> main
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
