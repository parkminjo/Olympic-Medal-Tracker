import React, { useState } from "react";

const CountryList = ({ medalList, setMedalList }) => {
  const headers = [
    { text: "국가명", value: "country" },
    { text: "금메달", value: "goldMedal" },
    { text: "은메달", value: "silverMedal" },
    { text: "동메달", value: "bronzeMedal" },
    { text: "액션", value: "action" },
  ];

  const deleteMedalList = (countryName) => {
    const deletedList = medalList.filter((country) => {
      return country.countryName !== countryName;
    });
    setMedalList(deletedList);
  };

  return (
    <table>
      <thead>
        <tr>
          {headers.map((title) => {
            return <th key={title.value}>{title.text}</th>;
          })}
        </tr>
      </thead>

      <tbody>
        {medalList.map((country) => {
          const { countryName, goldMedal, silverMedal, bronzeMedal } = country;

          return (
            <tr>
              <td>{countryName}</td>
              <td>{goldMedal}</td>
              <td>{silverMedal}</td>
              <td>{bronzeMedal}</td>
              <td>
                <button onClick={() => deleteMedalList(countryName)}>
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

export default CountryList;
