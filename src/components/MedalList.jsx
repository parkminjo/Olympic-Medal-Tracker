import React from "react";

const MedalList = ({ medalList, setMedalList }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>합계</th>
            <th>액션</th>
          </tr>
        </thead>
        <tbody>
          {medalList.map((medal) => {
            const { country, gold, silver, bronze, total } = medal;
            return (
              <tr key={country}>
                <td>{country}</td>
                <td>{gold}</td>
                <td>{silver}</td>
                <td>{bronze}</td>
                <td>{total}</td>
                <td>
                  <button>삭제</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MedalList;
