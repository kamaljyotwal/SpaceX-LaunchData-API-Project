import React from "react";
import "./App.css";
import Appdata from "./Appdata";
function App() {
  return (
    <div className="Appouterdiv">
      <h1>Space-X launch Data</h1>
      <div className="divWrappingComponents">
        <Appdata />
      </div>
    </div>
  );
}
export default App;
