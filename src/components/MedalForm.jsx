import React from "react";
import { useState } from "react";
import styled from "styled-components";

/** styled components */
const FormContainer = styled.form`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const Input = styled.input`
  width: 150px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  margin-right: 10px;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #ff9d23;
  padding: 10px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    opacity: 80%;
  }
`;

/** MedalForm */
const MedalForm = ({ medalList, setMedalList }) => {
  /** 메달 입력 state */
  const [countryMedal, setCountryMedal] = useState({
    country: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  /** onChange 핸들러 */
  const handleChange = (e) => {
    const { value, id } = e.target;
    setCountryMedal((prev) => ({
      ...prev,
      [id]: id === "country" ? value : +value,
    }));
  };

  /** 입력값 초기화 */
  const reset = () => {
    setCountryMedal({
      country: "",
      gold: 0,
      silver: 0,
      bronze: 0,
    });
  };

  /** 메달 합계 */
  const total = countryMedal.gold + countryMedal.silver + countryMedal.bronze;

  /** handleSubmit 함수 */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (medalList.some((medal) => medal.country === countryMedal.country)) {
      alert("이미 등록된 나라입니다.");
      return;
    }

    setMedalList((prev) => [
      ...prev,
      {
        ...countryMedal,
        total,
      },
    ]);

    reset();
  };

  /** handleUpdate 함수 */
  const handleUpdate = () => {
    const checkCountry = medalList.find(
      (medal) => medal.country === countryMedal.country
    );
    if (!checkCountry) {
      alert("등록되지 않은 나라입니다. 나라를 새롭게 추가해주세요!");
      return;
    }

    setMedalList((prev) =>
      [...prev].map((medal) => {
        const { country } = medal;
        if (medal.country === countryMedal.country) {
          return {
            country,
            gold: countryMedal.gold,
            silver: countryMedal.silver,
            bronze: countryMedal.bronze,
            total,
          };
        } else {
          return medal;
        }
      })
    );

    reset();
  };

  /** UI */
  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <label htmlFor="country">
          국가명
          <Input
            type="text"
            id="country"
            required
            value={countryMedal.country}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="gold">
          금메달
          <Input
            type="number"
            id="gold"
            required
            value={countryMedal.gold}
            min={0}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="silver">
          은메달
          <Input
            type="number"
            id="silver"
            required
            value={countryMedal.silver}
            min={0}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="bronze">
          동메달
          <Input
            type="number"
            required
            id="bronze"
            value={countryMedal.bronze}
            min={0}
            onChange={handleChange}
          />
        </label>
        <Button type="submit">추가</Button>
        <Button type="button" onClick={handleUpdate}>
          업데이트
        </Button>
      </FormContainer>
    </div>
  );
};

export default MedalForm;
