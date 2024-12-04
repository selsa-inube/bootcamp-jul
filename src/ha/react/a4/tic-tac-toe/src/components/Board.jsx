import styled from "styled-components";
import Square from "./Square";
import CalculateWinner from "./CalculateWiner";

const BoardRow = styled.div`
  display: flex;
  justify-content: space-around;
  height: 80px;
`;

const Status = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
`;

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    const { winner } = CalculateWinner(squares);
    if (winner || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const { winner, winningSquares } = CalculateWinner(squares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (squares.every((square) => square !== null)) {
    status = "It's a draw!";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const board = [];
  for (let row = 0; row < 3; row++) {
    const squaresRow = [];
    for (let col = 0; col < 3; col++) {
      const index = row * 3 + col;
      squaresRow.push(
        <Square
          key={index}
          value={squares[index]}
          onSquareClick={() => handleClick(index)}
          isWinning={winningSquares.includes(index)}
        />,
      );
    }
    board.push(<BoardRow key={row}>{squaresRow}</BoardRow>);
  }

  return (
    <>
      <Status>{status}</Status>
      {board}
    </>
  );
}

export default Board;
