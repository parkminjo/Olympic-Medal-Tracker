import React from "react";
import styled from "styled-components";

/** styled components */
const Table = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  border-collapse: collapse;
  border-style: hidden;
`;

const Tr = styled.tr`
  &:nth-child(2n) {
    background-color: #e1e5e9;
  }

  &:nth-child(2n-1) {
    background-color: #f8f9fa;
  }

  &:hover {
    box-shadow: 0 0 0 2px #2a2c2e inset;
  }
`;

const Th = styled.th`
  background-color: #543a14;
  color: white;

  width: 220px;
  height: 45px;
  text-align: center;
  border: none;
`;

const Td = styled.td`
  width: 220px;
  height: 45px;
  text-align: center;
  border: none;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #fb4141;
  padding: 8px;
  cursor: pointer;

  &:hover {
    opacity: 80%;
  }
`;

/** MedalList */
const MedalList = ({ medalList, setMedalList }) => {
  const handleDelete = (country) => {
    setMedalList((prev) =>
      [...prev].filter((medal) => medal.country !== country)
    );
  };

  /** UI */
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <Th>국가명</Th>
            <Th>금메달</Th>
            <Th>은메달</Th>
            <Th>동메달</Th>
            <Th>합계</Th>
            <Th>액션</Th>
          </tr>
        </thead>
        <tbody>
          {medalList.map((medal) => {
            const { country, gold, silver, bronze, total } = medal;
            return (
              <Tr key={country}>
                <Td>{country}</Td>
                <Td>{gold}</Td>
                <Td>{silver}</Td>
                <Td>{bronze}</Td>
                <Td>{total}</Td>
                <Td>
                  <Button onClick={() => handleDelete(country)}>삭제</Button>
                </Td>
              </Tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default MedalList;
