import React, { useState } from "react";

const RadioButton = ({ medalList, setMedalList }) => {
  // 금메달 기준
  const goldMedalLank = () => {
    setMedalList(
      [...medalList].sort((a, b) => {
        return b.goldMedalCount - a.goldMedalCount;
      })
    );
  };

  // 총 메달 수 기준
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
    <div>
      <input type="radio" name="sorting" value={1} onClick={goldMedalLank} />{" "}
      금메달 수 기준
      <input
        type="radio"
        name="sorting"
        value={2}
        onClick={totalMedalLank}
      />{" "}
      총 메달 수 기준
    </div>
  );
};

export default RadioButton;
