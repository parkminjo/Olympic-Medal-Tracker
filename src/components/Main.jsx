import React, { useState } from "react";
import Form from "./Form";
import CountryList from "./CountryList";

const Main = () => {
  const [medalList, setMedalList] = useState([]);

  return (
    <main>
      <Form medalList={medalList} setMedalList={setMedalList}></Form>
      <CountryList
        medalList={medalList}
        setMedalList={setMedalList}
      ></CountryList>
    </main>
  );
};

export default Main;
