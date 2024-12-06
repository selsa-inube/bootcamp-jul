import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${({ isWinning }) => (isWinning ? "chartreuse" : "#fff")};
  border: 1px solid #999;
  font-size: 30px;
  font-weight: bold;
  line-height: 34px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ isWinning }) => (isWinning ? "chartreuse" : "#ddd")};
  }
`;

const Square = ({ value, onSquareClick, isWinning }) => (
  <StyledButton onClick={onSquareClick} isWinning={isWinning}>
    {value}
  </StyledButton>
);

export default Square;
