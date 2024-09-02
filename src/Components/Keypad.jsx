import React from "react";
import Button from "./Button";

const Keypad = ({ onInput }) => {
  const buttons = [
    { id: "zero", label: "0" },
    { id: "one", label: "1" },
    { id: "two", label: "2" },
    { id: "three", label: "3" },
    { id: "four", label: "4" },
    { id: "five", label: "5" },
    { id: "six", label: "6" },
    { id: "seven", label: "7" },
    { id: "eight", label: "8" },
    { id: "nine", label: "9" },
    { id: "add", label: "+" },
    { id: "subtract", label: "-" },
    { id: "multiply", label: "*" },
    { id: "divide", label: "/" },
    { id: "equals", label: "=" },
    { id: "decimal", label: "." },
    { id: "clear", label: "AC" },
  ];

  return (
    <div className="keypad">
      {buttons.map((button) => (
        <Button key={button.id} id={button.id} onClick={onInput}>
          {button.label}
        </Button>
      ))}
    </div>
  );
};

export default Keypad;
