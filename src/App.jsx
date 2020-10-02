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
      <h4>Developed By: KAMAL JYOTWAL</h4>
    </div>
    
  );
}
export default App;
