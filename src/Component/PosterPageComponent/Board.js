import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";
import styled from "styled-components";
import "antd/dist/antd.min.css";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const [boardData, setBoardData] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios("/mockData.json").then((res) => setBoardData(res.data));
  }, []);
  return (
    <Wrap>
      <TitleArea>
        <Title>게시판</Title>
        <PostWrap>
          <PostBtn onClick={() => navigate("./post")}>글쓰기</PostBtn>
        </PostWrap>
      </TitleArea>
      {console.log(boardData)}
      {console.log(dataSource)}
      <BeTable dataSource={boardData} columns={columns} rowSelection="3" />;
    </Wrap>
  );
};

export default Board;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const TitleArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2%;
  gap: 3vw;
`;

const Title = styled.div`
  width: 100%;

  display: flex;
  flex: 20;
  justify-content: center;
`;

const PostWrap = styled.div`
  display: flex;
  align-items: flex-end;
  height: 5vh;
  flex: 2;

  /* border: 1px solid white; */
`;

const PostBtn = styled.button`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  background-color: grey;
  padding: 0.5vw;
  text-align: center;
`;

const BeTable = styled(Table)`
  width: 100%;
`;
const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "No",
    dataIndex: "key",
    key: "no",
  },
  {
    title: "제목",
    dataIndex: "title",
    key: "title",
    width: "40%",
  },
  {
    title: "글쓴이",
    dataIndex: "writer",
    key: "writer",
  },
  {
    title: "날짜",
    dataIndex: "dateTime",
    key: "dateTime",
  },
];
