import React, { useState } from "react";
import "./Cal.css";

const Cal = () => {
  const [input, setinput] = useState("");

  const calresult = (input) => {
    try {
      const operators = ["+", "-", "/", "*", "%"];
      let opt = null;

      for (let i = 0; i < input.length; i++) {
        if (operators.includes(input[i])) {
          opt = input[i];
          break;
        }
      }

      if (!opt) {
        setinput(input);
        return;
      }

      const [op1, op2] = input.split(opt).map(Number);
      let result;

      switch (opt) {
        case "+":
          result = op1 + op2;
          break;
        case "-":
          result = op1 - op2;
          break;
        case "*":
          result = op1 * op2;
          break;
        case "/":
          result = op2 !== 0 ? op1 / op2 : "Error";
          break;
        case "%":
          result = op1 % op2;
          break;
        default:
          result = "Error";
      }

      setinput(result.toString());
    } catch {
      setinput("Error");
    }
  };

  const clickbutton = (value) => {
    if (value === "Ac") {
      setinput("");
    } else if (value === "C") {
      setinput(input.slice(0, -1));
    } else if (value === "=") {
      calresult(input);
    } else {
      setinput((val) => val + value);
    }
  };

  return (
    <div style={{ paddingLeft: "90px", paddingTop: "100px" }}>
      <div className="cal">
        <h1>{input}</h1>

        <div>
          <button onClick={() => clickbutton("Ac")}>AC</button>
          <button onClick={() => clickbutton("C")}>&lt;</button>
          <button onClick={() => clickbutton("%")}>%</button>
          <button onClick={() => clickbutton("/")}>/</button>
        </div>

        <div>
          <button onClick={() => clickbutton("7")}>7</button>
          <button onClick={() => clickbutton("8")}>8</button>
          <button onClick={() => clickbutton("9")}>9</button>
          <button onClick={() => clickbutton("*")}>X</button>
        </div>

        <div>
          <button onClick={() => clickbutton("4")}>4</button>
          <button onClick={() => clickbutton("5")}>5</button>
          <button onClick={() => clickbutton("6")}>6</button>
          <button onClick={() => clickbutton("-")}>-</button>
        </div>

        <div>
          <button onClick={() => clickbutton("1")}>1</button>
          <button onClick={() => clickbutton("2")}>2</button>
          <button onClick={() => clickbutton("3")}>3</button>
          <button onClick={() => clickbutton("+")}>+</button>
        </div>

        <div>
          <button onClick={() => clickbutton("0")}>0</button>
          <button onClick={() => clickbutton("00")}>00</button>
          <button onClick={() => clickbutton(".")}>.</button>
          <button onClick={() => clickbutton("=")}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Cal;
