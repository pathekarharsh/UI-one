import React from "react";
import "./Main.css";
import Sidebar from "./Sidebar";
import Home from './Home';

function Main() {
  return (
    <div className="container">
      <div className="sidebar"><Sidebar /></div>
      <div className="middle-line">
        <div className="sub-line"></div>
      </div>
      <div className="main"><Home /></div>
    </div>
  );
}

export default Main;
