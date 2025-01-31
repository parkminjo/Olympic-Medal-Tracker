import React from "react";
import styled from "styled-components";

/** styled components */
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-top: 2rem;
`;

const Input = styled.input`
  margin-left: 1rem;
`;

/** RadioButton */
const RadioButton = ({ sortType, setSortType }) => {
  return (
    <Div>
      <label htmlFor="goldSort">
        <Input
          type="radio"
          id="goldSort"
          name="sorting"
          value="goldSort"
          checked={sortType === "goldSort"}
          onChange={(e) => setSortType(e.target.value)}
        />
        금메달순
      </label>
      <label htmlFor="totalSort">
        <Input
          type="radio"
          id="totalSort"
          name="sorting"
          value="totalSort"
          checked={sortType === "totalSort"}
          onChange={(e) => setSortType(e.target.value)}
        />
        합계순
      </label>
    </Div>
  );
};

export default RadioButton;
