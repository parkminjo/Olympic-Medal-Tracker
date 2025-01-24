import React, { useState } from "react";

const MedalForm = ({ medalList, setMedalList }) => {
  /** 나라명, 금, 은, 동메달 state */
  const [newCountry, setNewCountry] = useState("");
  const [goldMedal, setGoldMedal] = useState("");
  const [silverMedal, setSilverMedal] = useState("");
  const [bronzeMedal, setBronzeMedal] = useState("");

  /** 입력값 초기화 함수 */
  const reset = () => {
    setNewCountry("");
    setGoldMedal("");
    setSilverMedal("");
    setBronzeMedal("");
  };

  /** 나라명, 금, 은, 동메달 state 업데이트 */
  const saveNewCountry = (e) => {
    setNewCountry(e.target.value);
  };

  const saveGoldMedal = (e) => {
    setGoldMedal(+e.target.value);
  };

  const saveSilverMedal = (e) => {
    setSilverMedal(+e.target.value);
  };

  const saveBronzeMedal = (e) => {
    setBronzeMedal(+e.target.value);
  };

  /**
   * form 관리 함수
   * @param {*} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    /** 예외 상황 처리: 이미 추가된 나라일 때 */
    const checkDuplication = medalList.some((country) => {
      const { countryName } = country;
      return countryName.includes(newCountry);
    });
    if (checkDuplication) {
      alert("이미 존재하는 나라입니다.");
      return;
    }

    /** medalList state 업데이트 */
    const newMedalList = [
      ...medalList,
      {
        countryName: newCountry,
        goldMedalCount: goldMedal,
        silverMedalCount: silverMedal,
        bronzeMedalCount: bronzeMedal,
        total: goldMedal + silverMedal + bronzeMedal,
      },
    ];

    setMedalList(
      newMedalList.sort((a, b) => {
        return b.goldMedalCount - a.goldMedalCount;
      })
    );

    reset();
  };

  /**
   * 등록된 나라의 메달 리스트 수정 함수
   * @param {*} newCountry
   * @returns
   */
  const handleUpdate = (newCountry) => {
    /** 예외 상황: 등록되지 않은 나라를 수정하려고 할 때 */
    const checkCountry = medalList.some((country) => {
      return country.countryName === newCountry;
    });

    if (checkCountry === false) {
      alert("등록되지 않은 나라입니다.");
      return;
    }

    /** 등록된 나라의 메달 수 state 업데이트 */
    const updateList = medalList.map((country) => {
      const { countryName } = country;

      if (countryName === newCountry) {
        return {
          ...country,
          goldMedalCount: goldMedal,
          silverMedalCount: silverMedal,
          bronzeMedalCount: bronzeMedal,
          total: goldMedal + silverMedal + bronzeMedal,
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

  /** 입력 UI */
  return (
    <form onSubmit={handleSubmit}>
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
          required
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
          required
          min={0}
          max={99}
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
          required
          min={0}
          max={99}
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
          required
          min={0}
          max={99}
        />
      </div>

      <button type="submit">국가 추가</button>
      <button type="button" onClick={() => handleUpdate(newCountry)}>
        업데이트
      </button>
    </form>
  );
};

export default MedalForm;
