import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
function Board({isTurnX, squares, onPlay}) {
  function handleClick(i) {    
    // 중복 위치 방지 || 승자확인
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    console.log(isTurnX, "xTrun");
    const nextSquares = squares.slice(); // 진행 히스토리
    if (isTurnX) {
      console.log("xx", i);
      nextSquares[i] = "X";
    } else {
      console.log("oo", i);
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  // 승자출력
  const winner = calculateWinner(squares);
  let status = winner ? `Winner: ${winner}` : `Next Player: ${isTurnX ? "X" : "O"}`;

  
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}></Square>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}></Square>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}></Square>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}></Square>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}></Square>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}></Square>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}></Square>
      </div>
    </>
  );
}
export default function Game(){
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  // const [isTurnX, setIsTurnX] = useState(true); // 턴 스테이트
  const isTurnX = currentMove % 2 === 0;
  // 이동한 히스토리가 현재 스퀘어 정보
  let currentSquares = history[currentMove];
  // 게임히스토리, 턴정보 저장 자식컴포넌트에서 호출, 현재 히스토리 번호
  function handlePlay(nextSquares){ 
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    console.log(nextHistory, "nexthist");
    setHistory(nextHistory, 'next');
    // setHistory([...history.slice(0, currentMove + 1), nextSquares], 'next');
    console.log(history, "currhis");
    // setCurrentMove(history.length - 1);
    setCurrentMove(nextHistory.length - 1);
    console.log(currentMove, "currmove");
    // console로 찍었을때 이전값이 찍히는 이유 생명주기? qna
    // setIsTurnX(!isTurnX);
  }

  function jumpTo(nextMove){
    setCurrentMove(nextMove);
    // setIsTurnX(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if(move > 0){
      description = "Go to move #" + move;
    }else{
      description = "Go to game start";
    }
    return (<li key={move}>
      <button onClick={() => jumpTo(move)}>{description}</button>
      </li>)
  });

  return <div className="game">
    <div className="game-board">
      <Board isTurnX={isTurnX} squares={currentSquares} onPlay={handlePlay}/>
    </div>
    <div className="game-info">
      <ol>{moves}</ol>
    </div>
  </div>
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}