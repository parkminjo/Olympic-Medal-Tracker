import React, { useState } from "react";

const Form = ({ medalList, setMedalList }) => {
  const [countryName, setCountryName] = useState("");
  const [goldMedal, setGoldMedal] = useState("");
  const [silverMedal, setSilverMedal] = useState("");
  const [bronzeMedal, setBronzeMedal] = useState("");

  const saveCountryName = (e) => {
    setCountryName(e.target.value);
  };

  const saveGoldMedal = (e) => {
    setGoldMedal(e.target.value);
  };

  const saveSilverMedal = (e) => {
    setSilverMedal(e.target.value);
  };

  const saveBronzeMedal = (e) => {
    setBronzeMedal(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // 예외 상황 처리
    if (
      countryName === "" ||
      goldMedal === "" ||
      silverMedal === "" ||
      bronzeMedal === ""
    ) {
      return alert("값을 모두 입력하세요.");
    }

    // medalList state 변환
    setMedalList(
      [
        ...medalList,
        {
          countryName: countryName,
          goldMedal: goldMedal,
          silverMedal: silverMedal,
          bronzeMedal: bronzeMedal,
        },
      ].sort((a, b) => {
        return b.goldMedal - a.goldMedal;
      })
    );

    // 입력값 초기화
    setCountryName("");
    setGoldMedal("");
    setSilverMedal("");
    setBronzeMedal("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="country">
        <div>
          <label htmlFor="country-input">국가명</label>
        </div>
        <input
          type="text"
          id="country-input"
          placeholder="국가 입력"
          value={countryName}
          onChange={saveCountryName}
          autoFocus
        />
      </div>
      <div className="gold-medal">
        <div>
          <label htmlFor="gold-medal-input">금메달</label>
        </div>
        <input
          type="number"
          id="gold-medal-input"
          value={goldMedal}
          onChange={saveGoldMedal}
        />
      </div>
      <div className="silver-medal">
        <div>
          <label htmlFor="silver-medal-input">은메달</label>
        </div>
        <input
          type="number"
          id="silver-medal-input"
          value={silverMedal}
          onChange={saveSilverMedal}
        />
      </div>
      <div className="bronze-medal">
        <div>
          <label htmlFor="bronze-medal-input">동메달</label>
        </div>
        <input
          type="number"
          id="bronze-medal-input"
          value={bronzeMedal}
          onChange={saveBronzeMedal}
        />
      </div>

      <button type="submit">국가 추가</button>
      <button type="submit">업데이트</button>
    </form>
  );
};

export default Form;
