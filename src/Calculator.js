import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const calculateResult = () => {
    try {
      setDisplay(eval(display).toString()); 
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator-display">{display || "0"}</div>
      <div className="calculator-buttons">
        <button onClick={clearDisplay} className="button clear">C</button>
        <button onClick={() => handleClick("(")} className="button">(</button>
        <button onClick={() => handleClick(")")} className="button">)</button>
        <button onClick={() => handleClick("/")} className="button operator">/</button>
        <button onClick={() => handleClick("7")} className="button">7</button>
        <button onClick={() => handleClick("8")} className="button">8</button>
        <button onClick={() => handleClick("9")} className="button">9</button>
        <button onClick={() => handleClick("*")} className="button operator">*</button>
        <button onClick={() => handleClick("4")} className="button">4</button>
        <button onClick={() => handleClick("5")} className="button">5</button>
        <button onClick={() => handleClick("6")} className="button">6</button>
        <button onClick={() => handleClick("-")} className="button operator">-</button>
        <button onClick={() => handleClick("1")} className="button">1</button>
        <button onClick={() => handleClick("2")} className="button">2</button>
        <button onClick={() => handleClick("3")} className="button">3</button>
        <button onClick={() => handleClick("+")} className="button operator">+</button>
        <button onClick={() => handleClick("0")} className="button zero">0</button>
        <button onClick={() => handleClick(".")} className="button">.</button>
        <button onClick={calculateResult} className="button equals">=</button>
      </div>
    </div>
  );
};

export default Calculator;
