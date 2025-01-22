import React, { useState } from "react";

const MedalForm = ({ medalList, setMedalList }) => {
  const [newCountry, setNewCountry] = useState("");
  const [goldMedal, setGoldMedal] = useState("");
  const [silverMedal, setSilverMedal] = useState("");
  const [bronzeMedal, setBronzeMedal] = useState("");

  // 입력값 초기화 함수
  const reset = () => {
    setNewCountry("");
    setGoldMedal("");
    setSilverMedal("");
    setBronzeMedal("");
  };

  // 나라 이름, 금, 은, 동메달 state 변환
  const saveNewCountry = (e) => {
    setNewCountry(e.target.value);
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

  // form 관리 함수
  const submitHandler = (e) => {
    e.preventDefault();

    // 예외 상황 처리 1: 입력값이 없을 때
    if (
      newCountry === "" ||
      goldMedal === "" ||
      silverMedal === "" ||
      bronzeMedal === ""
    ) {
      alert("값을 모두 입력하세요.");
      return;
    }

    // 예외 상황 처리 2: 이미 추가된 나라일 때
    const checkDuplication = medalList.some((country) => {
      const { countryName } = country;
      return countryName.includes(newCountry);
    });
    if (checkDuplication) {
      alert("이미 존재하는 나라입니다.");
      return;
    }

    // medalList state 변환
    const newMedalList = [
      ...medalList,
      {
        countryName: newCountry,
        goldMedalCount: goldMedal,
        silverMedalCount: silverMedal,
        bronzeMedalCount: bronzeMedal,
      },
    ];

    setMedalList(
      newMedalList.sort((a, b) => {
        return b.goldMedalCount - a.goldMedalCount;
      })
    );

    reset();
  };

  // 등록된 나라의 메달 리스트 업데이트 함수
  const updateHandler = (newCountry) => {
    // 예외 상황: 등록되지 않은 나라를 수정하려고 할 때
    const checkNull = medalList.some((country) => {
      return country.countryName === newCountry;
    });

    if (checkNull === false) {
      alert("등록되지 않은 나라입니다.");
      return;
    }

    // 등록된 나라의 메달 수 state 변환
    const updateList = medalList.map((country) => {
      const { countryName } = country;

      if (countryName === newCountry) {
        return {
          ...country,
          goldMedalCount: goldMedal,
          silverMedalCount: silverMedal,
          bronzeMedalCount: bronzeMedal,
        };
      } else {
        return country;
      }
    });

    setMedalList(
      updateList.sort((a, b) => {
        return b.goldMedalCount - a.goldMedalCount;
      })
    );

    reset();
  };

  // 입력 UI
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
          value={newCountry}
          onChange={saveNewCountry}
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
      <button type="button" onClick={() => updateHandler(newCountry)}>
        업데이트
      </button>
    </form>
  );
};

export default MedalForm;
