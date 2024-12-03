import React from "react";
import styled from "styled-components";

const MainNewContainer = styled.div`
  grid-area: 3 / 1 / 4 / 2;
  padding: 0 3rem 0 0;
  border-right: 1px solid rgb(223, 223, 223);
`;
const MainNewTitle = styled.h3`
  font-size: 2.5rem;
  margin: 3vh 0;
`;
const MainNewText = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: rgb(46, 46, 46);
`;
const MainNews = () => {
  return (
    <MainNewContainer>
      <article>
        <img src="./img/first-article.jpg" alt="" />
        <span className="topic-time-container">
          <p>TECH FOC</p>
          <time dateTime="2020-03-20"> May 20,2020</time>
        </span>
        <MainNewTitle>
          Everything You Need to Know About Slow Internet Speeds
        </MainNewTitle>
        <MainNewText>
          Our crummy connections are the biggest tech headache in the pandemic.
        </MainNewText>
        <MainNewText>
          Here's a comprehensive guide to what to do about them.
        </MainNewText>
        <a href="" className="more-info">
          Continue Reading
        </a>
      </article>
    </MainNewContainer>
  );
};

export default MainNews;
