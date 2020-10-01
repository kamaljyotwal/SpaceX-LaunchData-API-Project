import React from "react";
import "./App.css";
import Appdata from "./Appdata";
import LeftPanel from "./LeftPanel";
function App() {
  return (
    <div className="Appouterdiv">
      <h1>SpaceX launch Data</h1>
      <div className="divWrappingComponents">
        <LeftPanel />
        <Appdata />
      </div>
    </div>
  );
}
export default App;
