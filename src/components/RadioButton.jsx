import React from "react";

const RadioButton = ({ sortType, setSortType }) => {
  /** Radio 버튼 UI */
  return (
    <div className="radio-button">
      <input
        type="radio"
        name="sorting"
        id="gold"
        value="gold"
        checked={sortType === "gold"}
        onChange={(e) => setSortType(e.target.value)}
      />{" "}
      <label htmlFor="gold" className="gold-lank">
        금메달순
      </label>
      <input
        type="radio"
        name="sorting"
        id="total"
        value="total"
        checked={sortType === "total"}
        onChange={(e) => {
          console.log(e.target.value);

          setSortType(e.target.value);
        }}
      />{" "}
      <label htmlFor="total" className="total-lank">
        합계순
      </label>
    </div>
  );
};

export default RadioButton;
