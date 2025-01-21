import React, { useState } from "react";

const CountryList = ({ medalList, setMedalList }) => {
  const headers = [
    { text: "국가명", value: "country" },
    { text: "금메달", value: "goldMedal" },
    { text: "은메달", value: "silverMedal" },
    { text: "액션", value: "action" },
  ];

  return (
    <table>
      <thead>
        <tr>
          {headers.map((title) => {
            return <th key={Math.floor(Math.random() * 100)}>{title.text}</th>;
          })}
        </tr>
      </thead>

      <tbody>
        {medalList.map((country) => {
          return (
            <tr>
              <td key={Math.floor(Math.random() * 100)}>
                {country.countryName}
              </td>
              <td>{country.goldMedal}</td>
              <td>{country.silverMedal}</td>
              <td>{country.bronzeMedal}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CountryList;
