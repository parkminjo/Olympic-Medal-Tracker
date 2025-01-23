import React from "react";

const RadioButton = ({ medalList, setMedalList }) => {
  // 금메달 기준 정렬
  const goldMedalLank = () => {
    setMedalList(
      [...medalList].sort((a, b) => {
        return b.goldMedalCount - a.goldMedalCount;
      })
    );
  };

  // 총 메달 수 기준 정렬
  const totalMedalLank = () => {
    const totalMedalList = medalList.map((country) => {
      const { goldMedalCount, silverMedalCount, bronzeMedalCount } = country;
      const total =
        Number(goldMedalCount) +
        Number(silverMedalCount) +
        Number(bronzeMedalCount);
      return { ...country, totalMedal: total };
    });

    setMedalList(
      totalMedalList.sort((a, b) => {
        return b.totalMedal - a.totalMedal;
      })
    );
  };

  // Radio 버튼 UI
  return (
    <div className="radio-button">
      <input
        type="radio"
        name="sorting"
        id="gold"
        value={1}
        onClick={goldMedalLank}
      />{" "}
      <label htmlFor="gold" className="gold-lank">
        금메달순
      </label>
      <input
        type="radio"
        name="sorting"
        id="total"
        value={2}
        onClick={totalMedalLank}
      />{" "}
      <label htmlFor="total" className="total-lank">
        합계순
      </label>
    </div>
  );
};

export default RadioButton;
