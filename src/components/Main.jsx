import React, { useState } from "react";
import Form from "./Form";
import MedalList from "./MedalList";

const Main = () => {
  const [medalList, setMedalList] = useState([]);

  return (
    <main>
      <Form medalList={medalList} setMedalList={setMedalList}></Form>
      <MedalList medalList={medalList} setMedalList={setMedalList}></MedalList>
    </main>
  );
};

export default Main;
