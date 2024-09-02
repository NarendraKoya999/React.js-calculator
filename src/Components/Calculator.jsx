import React, { useState } from "react";
import Display from "./Display";
import Keypad from "./Keypad";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [newCalculationFlag, setNewCalculationFlag] = useState(false);

  const handleInput = (input) => {
    if (input === "AC") {
      setDisplayValue("0");
      return;
    }

    if (input === "=") {
      calculateResult();
      return;
    }

    if (["+", "-", "*", "/"].includes(input)) {
      if (newCalculationFlag) {
        setDisplayValue((prev) => prev + input);
        setNewCalculationFlag(false);
      } else if (["+", "-", "*", "/"].includes(displayValue.slice(-1))) {
        setDisplayValue((prev) => prev.slice(0, -1) + input);
      } else {
        setDisplayValue((prev) => prev + input);
      }
      return;
    }

    if (
      input === "." &&
      displayValue.includes(".") &&
      displayValue.split(".").pop().length === 0
    )
      return;
    if (input === "." && displayValue.includes(".")) return;

    if (displayValue === "0" || newCalculationFlag) {
      setDisplayValue(input !== "." ? input : "0.");
      setNewCalculationFlag(false);
    } else {
      setDisplayValue((prev) => prev + input);
    }
  };

  const calculateResult = () => {
    try {
      const result = eval(displayValue).toFixed(4);
      setDisplayValue(String(result));
      setNewCalculationFlag(true);
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <Keypad onInput={handleInput} />
    </div>
  );
};

export default Calculator;
