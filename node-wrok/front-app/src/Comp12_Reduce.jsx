import { Button } from "reactstrap";
import { useState, useReducer } from "react";

export default function App() {
  // reducer 함수
  const countReducer = (oldVal, { type, number }) => {
    if (type == "UP") return oldVal + number;
    else if (type == "DOWN") return oldVal - number;
    else return 0;
  };
  let [count, dispatchCount] = useReducer(countReducer, 0);
  const downCnt = () => {
    dispatchCount({ type: "DOWN", number: 10 });
  };
  const resetCnt = () => {
    dispatchCount({ type: "RESET", number: 10 });
  };
  const upCnt = () => {
    dispatchCount({ type: "UP", number: 10 });
  };
  return (
    <div>
      <Button onClick={downCnt}>-</Button>
      <Button onClick={resetCnt}>0</Button>
      <Button onClick={upCnt}>+</Button>
      <p>{count}</p>
    </div>
  );
}
