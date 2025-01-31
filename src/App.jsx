import React from "react";
import MedalForm from "./components/MedalForm";
import MedalList from "./components/MedalList";
import RadioButton from "./components/RadioButton";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

/** styled components */
const Container = styled.div`
  width: 1100px;
  height: 100%;
  margin: 2rem auto 1rem auto;
  padding: 3rem;
  background-color: white;
  box-shadow: 0 0 5px 1px #ced4da;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const H1 = styled.h1`
  margin-bottom: 2rem;
`;

/** App */
const App = () => {
  /** 나라별 메달 현황 state */
  const [medalList, setMedalList] = useState(
    JSON.parse(localStorage.getItem("medalList")) || []
  );

  /** 정렬 기준 state */
  const [sortType, setSortType] = useState("goldSort");

  /** 금메달순, 합계순 정렬 함수 */
  const getSortedList = () => {
    if (sortType === "goldSort") {
      const sortedList = [...medalList].sort((a, b) => b.gold - a.gold);
      return sortedList;
    } else {
      const sortedList = [...medalList].sort(
        (a, b) => b.gold + b.silver + b.bronze - (a.gold + a.silver + a.bronze)
      );
      return sortedList;
    }
  };

  const sortedList = getSortedList();

  /** 로컬 스토리지 저장 */
  useEffect(() => {
    localStorage.setItem("medalList", JSON.stringify(medalList));
  }, [medalList]);

  /** UI */
  return (
    <Container>
      <H1>2024 파리 올림픽 메달 집계🏅</H1>
      <MedalForm medalList={medalList} setMedalList={setMedalList} />
      <RadioButton sortType={sortType} setSortType={setSortType} />
      <MedalList medalList={sortedList} setMedalList={setMedalList} />
    </Container>
  );
};

export default App;
