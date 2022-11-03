import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";
import styled from "styled-components";
import "antd/dist/antd.min.css";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const [boardData, setBoardData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios("https://chart-bulletinboard-default-rtdb.firebaseio.com/.json").then(
      (res) => {
        const userData = [];
        let index = 1;
        for (let id in res.data) {
          userData.push({ ...res.data[id], id: id, key: index });
          index++;
        }

        setBoardData(userData);
      }
    );
  }, []);

  return (
    <Wrap>
      <TitleArea>
        <Title>게시판</Title>

        <PostWrap>
          <PostBtn onClick={() => navigate("./post")}>글쓰기</PostBtn>
        </PostWrap>
      </TitleArea>
      <BeTable dataSource={boardData} columns={columns} rowSelection="3" />
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
    key: "key",
  },
  {
    title: "제목",
    dataIndex: "title",
    key: "title",
    width: "40%",
  },

  {
    title: "날짜",
    dataIndex: "writeDate",
    key: "writeDate",
  },
];
