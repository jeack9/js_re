import "./App.css";
import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
function Board() {
  const [square, setSquares] = useState(Array(9).fill(null));
  const [isTurnX, setIsTurnX] = useState(true); // 첫 턴: X
  function handleClick(i) {
    // 중복 위치 방지
    if (square[i] != null) {
      return;
    }
    const nextSquare = square.slice(); //
    if (isTurnX) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    setSquares(nextSquare);
    setIsTurnX(!isTurnX); // 턴 변경
  }
  return (
    <>
      <div className="board-row">
        <Square value={square[0]} onSquareClick={() => handleClick(0)}></Square>
        <Square value={square[1]} onSquareClick={() => handleClick(1)}></Square>
        <Square value={square[2]} onSquareClick={() => handleClick(2)}></Square>
      </div>
      <div className="board-row">
        <Square value={square[3]} onSquareClick={() => handleClick(3)}></Square>
        <Square value={square[4]} onSquareClick={() => handleClick(4)}></Square>
        <Square value={square[5]} onSquareClick={() => handleClick(5)}></Square>
      </div>
      <div className="board-row">
        <Square value={square[6]} onSquareClick={() => handleClick(6)}></Square>
        <Square value={square[7]} onSquareClick={() => handleClick(7)}></Square>
        <Square value={square[8]} onSquareClick={() => handleClick(8)}></Square>
      </div>
    </>
  );
}
function App() {
  return (
    <div className="App">
      <Board></Board>
    </div>
  );
}

export default App;
