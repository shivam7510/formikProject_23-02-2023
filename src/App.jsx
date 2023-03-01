import React, { useState } from "react";
import ReactDOM from "react-dom";
import Content1 from "./Components/Content1";
import Table from "./Components/Table";

import "./index.scss";

const App = () => {
  const [tableInfo, setTableInfo] = useState([]);

  console.log(tableInfo);

  return (
    <>
      <div className="flex h-screen w-screen">
        <div className="flex justify-center items-center w-2/5 border-r border-black">
          <Content1 setInfo={setTableInfo} />
        </div>
        <div className="flex justify-center items-center w-3/5 p-2">
          <Table info={tableInfo} setInfo={setTableInfo} />
        </div>
      </div>
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
