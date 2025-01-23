import React from "react";
import uuid from "react-uuid";

const MedalList = ({ medalList, setMedalList }) => {
  /**
   * 메달 리스트 삭제 함수
   * @param {*} clickedCountry
   */
  const deleteMedalList = (clickedCountry) => {
    const filteredList = medalList.filter((country) => {
      return country.countryName !== clickedCountry;
    });
    setMedalList(filteredList);
  };

  /** 메달 리스트 UI */
  return (
    <table>
      <thead>
        <tr>
          <th>국가명</th>
          <th>금</th>
          <th>은</th>
          <th>동</th>
          <th>합계</th>
          <th>액션</th>
        </tr>
      </thead>

      <tbody>
        {medalList.map((country) => {
          const {
            countryName,
            goldMedalCount,
            silverMedalCount,
            bronzeMedalCount,
            total,
          } = country;

          return (
            <tr key={uuid()}>
              <td key={uuid()}>{countryName}</td>
              <td key={uuid()} className="gold">
                {goldMedalCount}
              </td>
              <td key={uuid()}>{silverMedalCount}</td>
              <td key={uuid()}>{bronzeMedalCount}</td>
              <td key={uuid()} className="total">
                {total}
              </td>
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
