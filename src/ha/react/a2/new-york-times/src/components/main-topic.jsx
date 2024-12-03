import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const MainTopicsContainer = styled.section`
  border-top: 1px solid rgb(223, 223, 223);
  grid-area: 1 / 1 / 2 / 4;
`;
const TopicsDate = styled.li`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
`;
const MoreTopics = styled.li`
  background-color: black;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.4rem;
`;
const Icon = styled(FontAwesomeIcon)`
  color: white;
`;
const MainTopic = () => {
  return (
    <MainTopicsContainer>
      <ul>
        <TopicsDate>
          <strong>Monday</strong>
          <time dateTime="2020-03-21">May 21,2020</time>
        </TopicsDate>
        <li>
          <a href="">Word</a>
        </li>
        <li>
          <a href="">Politics</a>
        </li>
        <li>
          <a href="">Bussiness</a>
        </li>
        <li>
          <a href="">Opinion</a>
        </li>
        <li>
          <a href="">Tech</a>
        </li>
        <li>
          <a href="">Science</a>
        </li>
        <li>
          <a href="">Sports</a>
        </li>
        <li>
          <a href="">Arts</a>
        </li>
        <li>
          <a href="">Books</a>
        </li>
        <li>
          <a href="">Style</a>
        </li>
        <li>
          <a href="">Food</a>
        </li>
        <li>
          <a href="">Travel</a>
        </li>
        <li>
          <a href="">Magazine</a>
        </li>
        <MoreTopics>
          <Icon icon={faEllipsis} />
        </MoreTopics>
      </ul>
    </MainTopicsContainer>
  );
};

export default MainTopic;
