import React, { useState } from "react";
import MedalForm from "./MedalForm";
import MedalList from "./MedalList";

const Main = () => {
  const [medalList, setMedalList] = useState([]);
  const [titleList, setTitleList] = useState([]);

  return (
    <main>
      <MedalForm
        medalList={medalList}
        setMedalList={setMedalList}
        setTitleList={setTitleList}
      ></MedalForm>

      <div className="medalList">
        <MedalList
          medalList={medalList}
          setMedalList={setMedalList}
          titleList={titleList}
          setTitleList={setTitleList}
        ></MedalList>
      </div>
    </main>
  );
};

export default Main;
