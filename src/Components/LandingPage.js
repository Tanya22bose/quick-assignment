import React from "react";
import "./circle.css";
import "./LandingPage.css";
import { useState, useEffect } from "react";
import First from "./FirstPage";
import Second from "./SecondPage";
import Third from "./ThirdPage";
import Fourth from "./FourthPage";

const Main = () => {
  const [circle] = useState(4);
  let [count, setcount] = useState(1);
  const [active, setactive] = useState(1);
  const [width, setwidth] = useState(1);

  useEffect(() => {
    if (active === 1) setwidth(25);
    if (active === 2) setwidth(50);
    if (active === 3) setwidth(80);
    if (active === 4) setwidth(100);
  }, [circle, active]);

  const arr = [];
  for (let i = 0; i < circle; i++) {
    arr.push(
      <div className={i < active ? "active" : "circle"} key={i}>
        {i + 1}
      </div>
    );
  }

  const Change = (active) => {
    setactive(active + 1);
    setcount(count + 1);
  };

  return (
    <div>
      <div className="div-1">
        <img
          src="data:image/png;base64,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"
          alt="img-1"
          width="32px"
          height="34px"
        ></img>
        <h2>Eden</h2>
      </div>
      <div className="container">
        <div className="content">
          <div className="progressbar">
            <div className="progress" style={{ width: width + "%" }}></div>
            {arr}
          </div>
        </div>
      </div>
      <form className="form">
        {count === 1 ? <First /> : ""}
        {count === 2 ? <Second /> : ""}
        {count === 3 ? <Third /> : ""}
        {count === 4 ? <Fourth /> : ""}
      </form>
      <div
        className="btn-1"
        onClick={() => {
          active >= circle ? setactive(circle) : Change(active);
        }}
      >
        Create Workspace
      </div>
    </div>
  );
};

export default Main;
