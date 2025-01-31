import React, { useState, useEffect } from "react";
import MedalForm from "./MedalForm";
import MedalList from "./MedalList";
import RadioButton from "./RadioButton";

const Main = () => {
  /** 메달 리스트 state */
  const [medalList, setMedalList] = useState(
    JSON.parse(localStorage.getItem("medalList")) || []
  );

  /** 메달 리스트 정렬 state */
  const [sortType, setSortType] = useState("gold");

  /** medalist 로컬 스토리지에 저장 */
  useEffect(() => {
    localStorage.setItem("medalList", JSON.stringify(medalList));
  }, [medalList]);

  /**
   * 메달 리스트를 정렬하는 함수
   * @returns 정렬된 메달 리스트
   */
  const getSortedMedals = () => {
    if (sortType === "gold") {
      const sortedMedalList = [...medalList].sort((a, b) => {
        return b.goldMedalCount - a.goldMedalCount;
      });
      return sortedMedalList;
    } else {
      const sortedMedalList = [...medalList].sort((a, b) => {
        return (
          b.goldMedalCount +
          b.silverMedalCount +
          b.bronzeMedalCount -
          (a.goldMedalCount + a.silverMedalCount + a.bronzeMedalCount)
        );
      });
      return sortedMedalList;
    }
  };

  const sortedMedalList = getSortedMedals();

  /** 메달 리스트에 들어있는 값 확인 */
  const check = medalList.length === 0;

  /** UI */
  return (
    <main>
      <MedalForm medalList={medalList} setMedalList={setMedalList}></MedalForm>
      <RadioButton sortType={sortType} setSortType={setSortType}></RadioButton>
      {check && <p>아직 추적된 국가가 없습니다. 메달을 추적하세요🥇🥈🥉</p>}
      {check || (
        <div className="medal-list">
          <MedalList
            medalList={sortedMedalList}
            setMedalList={setMedalList}
          ></MedalList>
        </div>
      )}
    </main>
  );
};

export default Main;
