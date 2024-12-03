import React from "react";
import styled from "styled-components";

const TopicsSelected = styled.section`
  grid-area: 2 / 1 / 3 / 2;
  padding-right: 7vw;
`;
const SelectTopic = styled.a`
  border-bottom: 2px solid rgb(83, 83, 83);
`;
const SelectTopics = () => {
  return (
    <TopicsSelected>
      <ul>
        <li>
          <h2>Bussines</h2>
        </li>
        <li>
          <SelectTopic>Tech</SelectTopic>
        </li>
        <li>
          <a href="">Econ</a>
        </li>
        <li>
          <a href="">Media</a>
        </li>
        <li>
          <a href="">Money</a>
        </li>
        <li>
          <a href="">DealBook</a>
        </li>
      </ul>
    </TopicsSelected>
  );
};

export default SelectTopics;
