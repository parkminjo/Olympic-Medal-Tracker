import React, { useState } from "react";
import uuid from "react-uuid";

const MedalList = ({ medalList, setMedalList }) => {
  // 클릭한 나라 메달 리스트 삭제
  const deleteMedalList = (clickedCountry) => {
    const filteredList = medalList.filter((country) => {
      return country.countryName !== clickedCountry;
    });
    setMedalList(filteredList);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>국가명</th>
          <th>금메달</th>
          <th>은메달</th>
          <th>동메달</th>
          <th>액션</th>
        </tr>
      </thead>

      <tbody>
        {medalList.map((country) => {
          const { countryName, goldMedal, silverMedal, bronzeMedal } = country;

          return (
            <tr key={uuid()}>
              <td key={uuid()}>{countryName}</td>
              <td key={uuid()}>{goldMedal}</td>
              <td key={uuid()}>{silverMedal}</td>
              <td key={uuid()}>{bronzeMedal}</td>
              <td>
                <button
                  key={uuid()}
                  onClick={() => deleteMedalList(countryName)}
                >
                  삭제
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MedalList;
