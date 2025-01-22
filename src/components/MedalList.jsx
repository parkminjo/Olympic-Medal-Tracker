import React, { useState } from "react";
import uuid from "react-uuid";

const MedalList = ({ medalList, setMedalList, titleList, setTitleList }) => {
  // 클릭한 나라 메달 리스트 삭제
  const deleteMedalList = (clickedCountry) => {
    const filteredList = medalList.filter((country) => {
      return country.countryName !== clickedCountry;
    });
    setMedalList(filteredList);

    if (filteredList.length === 0) setTitleList([]);
  };

  // 메달 리스트 UI
  return (
    <table>
      <thead>
        <tr>
          {titleList.map((title) => {
            return <th key={uuid()}>{title}</th>;
          })}
        </tr>
      </thead>

      <tbody>
        {medalList.map((country) => {
          const {
            countryName,
            goldMedalCount,
            silverMedalCount,
            bronzeMedalCount,
          } = country;

          return (
            <tr key={uuid()}>
              <td key={uuid()}>{countryName}</td>
              <td key={uuid()}>{goldMedalCount}</td>
              <td key={uuid()}>{silverMedalCount}</td>
              <td key={uuid()}>{bronzeMedalCount}</td>
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
