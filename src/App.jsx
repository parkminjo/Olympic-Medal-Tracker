import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="container">
      <Header></Header>
      <Main></Main>
    </div>
  );
};

export default App;
