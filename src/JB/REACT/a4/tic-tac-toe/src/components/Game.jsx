import React, { useState } from "react";
import styled from "styled-components";
import Board from "./board";

const GameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 20px;
`;

const GameBoard = styled.div`
  margin-right: 20px;
`;

const GameInfo = styled.div`
  ol {
    padding-left: 30px;
    cursor: pointer;
  }

  button {
    margin-bottom: 5px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const updatedHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(updatedHistory);
    setCurrentMove(updatedHistory.length - 1);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  };

  const moves = history.map((squares, move) => {
    const description = move ? `Go to move #${move}` : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <GameWrapper>
      <GameBoard>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </GameBoard>
      <GameInfo>
        <ol>{moves}</ol>
      </GameInfo>
    </GameWrapper>
  );
}
