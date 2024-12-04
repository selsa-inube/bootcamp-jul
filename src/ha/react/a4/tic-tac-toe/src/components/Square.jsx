import styled from "styled-components";

const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${({ isWinning }) => (isWinning ? "red" : "#fff")};
  border: 1px solid #999;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  text-align: center;
  cursor: pointer;
`;

function Square({ value, onSquareClick, isWinning }) {
  return (
    <StyledButton onClick={onSquareClick} isWinning={isWinning}>
      {value}
    </StyledButton>
  );
}

export default Square;
