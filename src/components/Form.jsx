import React, { useState } from "react";

const Form = () => {
  const [overallState, setOverallSate] = useState("");

  const [countryName, setCountryName] = useState("");
  const [goldMedal, setGoldMedal] = useState("");
  const [silverMedal, setSilverMedal] = useState("");
  const [bronzeMedal, setBronzeMedal] = useState("");

  const saveCountryName = (e) => {
    setCountryName(e.target.value);
  };

  const saveGoldMedal = (e) => {
    setGoldMedal(e.target.value);
  };

  const saveSilverMedal = (e) => {
    setSilverMedal(e.target.value);
  };

  const saveBronzeMedal = (e) => {
    setBronzeMedal(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setOverallSate({
      country: countryName,
      goldMedal: goldMedal,
      silverMedal: silverMedal,
      bronzeMedal: bronzeMedal,
    });

    setCountryName("");
    setGoldMedal("");
    setSilverMedal("");
    setBronzeMedal("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="country">
        <div>
          <label htmlFor="country-input">국가명</label>
        </div>
        <input
          type="text"
          id="country-input"
          placeholder="국가 입력"
          value={countryName}
          onChange={saveCountryName}
        />
      </div>
      <div className="gold-medal">
        <div>
          <label htmlFor="gold-medal-input">금메달</label>
        </div>
        <input
          type="number"
          id="gold-medal-input"
          value={goldMedal}
          onChange={saveGoldMedal}
        />
      </div>
      <div className="silver-medal">
        <div>
          <label htmlFor="silver-medal-input">은메달</label>
        </div>
        <input
          type="number"
          id="silver-medal-input"
          value={silverMedal}
          onChange={saveSilverMedal}
        />
      </div>
      <div className="bronze-medal">
        <div>
          <label htmlFor="bronze-medal-input">동메달</label>
        </div>
        <input
          type="number"
          id="bronze-medal-input"
          value={bronzeMedal}
          onChange={saveBronzeMedal}
        />
      </div>

      <button type="submit">국가 추가</button>
    </form>
  );
};

export default Form;
