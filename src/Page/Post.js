import Template from "../Template/Template";
import { Input } from "antd";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Button } from "antd";
import moment from "moment";
import axios from "axios";
import firebase from "../firebase";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

function Post() {
  const [postData, setPostData] = useState({
    id: "",
    title: "",
    content: "",
    writeDate: "",
  });

  const navigate = useNavigate();

  let date = new Date();

  useEffect(() => {
    postData.writeDate &&
      axios
        .post(
          `https://chart-bulletinboard-default-rtdb.firebaseio.com/.json`,
          postData
        )
        .then(() => navigate("/poster"))
        .catch(() => alert("등록에 실패하였습니다."));
  }, [postData.writeDate]);

  const onClick = async (e) => {
    date = new Date();
    const nowDate = moment(date).format("YYYY-MM-DD-HH시mm분ss초");

    setPostData({
      ...postData,
      writeDate: nowDate,
    });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  return (
    <Template>
      <Wrap>
        {console.log(postData)}
        <Container>
          <Title>글쓰기</Title>
          <InputArea>
            <TitleInput
              placeholder="제목"
              name="title"
              onChange={onChange}
            ></TitleInput>
            <ContentText rows={10} name="content" onChange={onChange} />
            <SubmitBtn onClick={onClick}>등록하기</SubmitBtn>
          </InputArea>
        </Container>
      </Wrap>
    </Template>
  );
}

export default Post;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 3%;
  margin: 2%;
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  font-size: 2vw;
`;

const InputArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3vw;
  width: 100%;
  height: 100%;
  margin: 5%;
`;

const TitleInput = styled(Input)`
  border: none;
  border-bottom: 1px solid #c1c0ce;
  color: white;
  background: #191825;
  font-size: 2vw;
  :focus {
    background: #ebebeb;
    outline: none;
    color: black;
  }
`;

const ContentText = styled(TextArea)`
  border: 1px solid #c1c0ce;
  border-radius: 10px;
  color: white;
  background: #191825;
  font-size: 1vw;
  overflow: scroll;
  :focus {
    background: #ebebeb;
    outline: none;
    color: black;
  }
`;

const SubmitBtn = styled(Button)`
  width: 10vw;
  height: 3vw;
  border-radius: 10px;
  :hover {
    background-color: #222132;
    color: white;
  }
`;
