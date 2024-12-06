import React from "react";
import Square from "./square";
import styled from "styled-components";

const BoardRow = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Status = styled.div`
  margin-bottom: 10px;
  font-size: 23px;
  font-weight: bold;
`;

function Board({ xIsNext, squares, onPlay }) {
  const winnerInfo = calculateWinner(squares);
  const winner = winnerInfo?.winner || null;
  const winningSquares = winnerInfo?.line || [];

  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  const handleClick = (i) => {
    if (winner || squares[i]) return;
    const nextSquares = [...squares];
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };

  const renderSquare = (index) => (
    <Square
      key={index}
      value={squares[index]}
      onSquareClick={() => handleClick(index)}
      isWinning={winningSquares.includes(index)}
    />
  );

  const boardRows = [0, 3, 6].map((rowStart) => (
    <BoardRow key={rowStart}>
      {Array(3)
        .fill(null)
        .map((_, offset) => renderSquare(rowStart + offset))}
    </BoardRow>
  ));

  return (
    <>
      <Status>{status}</Status>
      {boardRows}
    </>
  );
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

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }

  return null;
}

export default Board;
