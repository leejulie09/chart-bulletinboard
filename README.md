# 위닝아이 | 차트 페이지와 게시판 만들기

## 1. 프로젝트 개요

- 과제 주관 : 위닝아이
- 작업 기간 : 2022년 10월 17일 ~ 2022년 10월 20일
- 참여 인원 : 3명 - 김민욱, 김영수, 이주리
- 기술 스택 : HTML5, React.js, Styled-components, Chart JS, Antd, Recoil
- 구현사이트 :

## 2. 팀원 역할 분할

- 김영수 - 게시판 구현
- 김민욱(PO) - 초기세팅, 사이드바 구현
- 이주리 - 차트 구현

## 3. 프로젝트 구조

```
📦src
 ┣ 📂Component
 ┃ ┣ 📂GraphPageComponent
 ┃ ┃ ┣ 📜BarChart.js
 ┃ ┃ ┣ 📜LineChart.js
 ┃ ┃ ┗ 📜PieChart.js
 ┃ ┗ 📂PosterPageComponent
 ┃ ┃ ┣ 📜Board.js
 ┃ ┃ ┗ 📜PosterChildren.js
 ┣ 📂Page
 ┃ ┣ 📜Graph.js
 ┃ ┣ 📜Post.js
 ┃ ┣ 📜PostTest.js
 ┃ ┗ 📜Poster.js
 ┣ 📂Style
 ┃ ┣ 📜GlobalStyle.js
 ┃ ┗ 📜Theme.js
 ┣ 📂Template
 ┃ ┣ 📜LinkButtonAtom.template.js
 ┃ ┣ 📜LinkMockDataArray.js
 ┃ ┣ 📜LogoAtom.template.js
 ┃ ┗ 📜Template.js
 ┣ 📂asset
 ┃ ┗ 📜Logo.png
 ┣ 📜Router.js
 ┣ 📜Store.js
 ┗ 📜index.js
```

## 4. 구현 기능

### 사이드바

- props사용시 코드를 깔끔하게 관리하기 위해 Recoil 라이브러리 사용
- css 삼항연산자 활용하여 로 접기, 펴기 가능한 사이드바 구현
- 버튼 컴포넌트화 하여 재사용

### 차트

- Chart JS 사용하여 막대, 선, 파이 차트 구현
- useState, useEffect 활용하여 공공데이터 API fetch
- map 메서드 사용하여 배열 데이터 불러오기
- media queries와 그리드 사용하여 반응형 구현

### 게시판

- 게시판 내용은 목데이터 활용
- antd 라이브러리 사용하여 게시판 테이블 구현
- 제목, 내용, 글 쓴 날짜를 포함하여 글쓰기 기능 구현
- moment 라이브러리 사용하여 글쓴 날짜 표시
