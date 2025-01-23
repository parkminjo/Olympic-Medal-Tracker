import React, { useState, useEffect } from "react";
import MedalForm from "./MedalForm";
import MedalList from "./MedalList";
import RadioButton from "./RadioButton";

const Main = () => {
  /** 메달 리스트 state */
  const [medalList, setMedalList] = useState(
    JSON.parse(localStorage.getItem("medalList")) || []
  );

  /** medalist 로컬 스토리지에 저장 */
  useEffect(() => {
    localStorage.setItem("medalList", JSON.stringify(medalList));
  }, [medalList]);

  const check = medalList.length === 0;

  /** UI */
  return (
    <main>
      <MedalForm medalList={medalList} setMedalList={setMedalList}></MedalForm>
      <RadioButton
        medalList={medalList}
        setMedalList={setMedalList}
      ></RadioButton>
      {check && <p>아직 추적된 국가가 없습니다. 메달을 추적하세요🥇🥈🥉</p>}
      {check || (
        <div className="medal-list">
          <MedalList
            medalList={medalList}
            setMedalList={setMedalList}
          ></MedalList>
        </div>
      )}
    </main>
  );
};

export default Main;
