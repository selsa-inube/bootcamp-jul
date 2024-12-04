import styled from "styled-components";
import { useState } from "react";
import Board from "./Board";

const GameWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const GameBoard = styled.div`
  margin-right: 20px;
  width: 180px;
`;

const GameInfo = styled.div`
  ol {
    padding-left: 30px;
    cursor: pointer;
  }
`;

const ToggleButton = styled.button`
  margin-top: 10px;
  background-color: blue;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
`;

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAscending, setIsAscending] = useState(true);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function toggleOrder() {
    setIsAscending(!isAscending);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `You are in the move: #${move}`;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <p onClick={() => jumpTo(move)}>{description}</p>
      </li>
    );
  });

  const sortedMoves = isAscending ? moves : moves.slice().reverse();

  return (
    <GameWrapper>
      <GameBoard>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </GameBoard>
      <GameInfo>
        <ToggleButton onClick={toggleOrder}>
          {isAscending ? "Sort Descending" : "Sort Ascending"}
        </ToggleButton>
        <ol>{sortedMoves}</ol>
      </GameInfo>
    </GameWrapper>
  );
}
