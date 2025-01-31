import React from "react";
import "./App.css";
import MedalForm from "./components/MedalForm";
import MedalList from "./components/MedalList";
import RadioButton from "./components/RadioButton";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  width: 1100px;
  height: 100%;
  margin: 2rem auto 1rem auto;
  padding: 3rem;
  background-color: white;
  box-shadow: 0 0 5px 1px #ced4da;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  const [medalList, setMedalList] = useState([]);

  return (
    <Container>
      <h1>2024 파리 올림픽 메달 집계🏅</h1>
      <MedalForm medalList={medalList} setMedalList={setMedalList} />
      <RadioButton />
      <MedalList medalList={medalList} setMedalList={setMedalList} />
    </Container>
  );
};

export default App;
