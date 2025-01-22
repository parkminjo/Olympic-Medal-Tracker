import React, { useState } from "react";
import MedalForm from "./MedalForm";
import MedalList from "./MedalList";

const Main = () => {
  const [medalList, setMedalList] = useState([]);

  return (
    <main>
      <MedalForm medalList={medalList} setMedalList={setMedalList}></MedalForm>
      <MedalList medalList={medalList} setMedalList={setMedalList}></MedalList>
    </main>
  );
};

export default Main;
