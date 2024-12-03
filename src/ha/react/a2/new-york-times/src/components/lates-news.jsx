import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot, faCircle } from "@fortawesome/free-solid-svg-icons";

const Icon = styled(FontAwesomeIcon)`
  font-size: 1rem;
`;

const LatestNewsContainer = styled.div`
  grid-area: 3 /2 / 4 / 3;
  border-right: 1px solid rgb(223, 223, 223);
  padding: 0 2rem;
`;

const LatestNewsStrong = styled.strong`
  font-size: 1rem;
`;

const LatestNewsTitle = styled.h3`
  margin-top: 2rem;
  font-size: 1.2rem;
  line-height: 1.2;
`;

const LatestNewsList = styled.ul`
  margin-top: 2.5rem;
  width: 7rem;
`;

const LatestNews = () => {
  return (
    <LatestNewsContainer>
      <LatestNewsStrong>Latest News</LatestNewsStrong>
      <span className="topic-time-container">
        <p>THE UPSHOT</p>
        <time dateTime="2020-03-19">May 19,2020</time>
      </span>
      <article>
        <LatestNewsTitle>
          A Wave of Small Business Closures Is on the Way.Can Washington Stom
          It?
        </LatestNewsTitle>
        <a href="" className="more-info">
          Continue Reading
        </a>
      </article>
      <span className="topic-time-container">
        <p>NEWS ANALYSIS</p>
        <time dateTime="2020-03-19">May 19,2020</time>
      </span>
      <article>
        <LatestNewsTitle>
          Coronavirus Shut Down the 'Experience Economy.' Can It Come Back
        </LatestNewsTitle>
        <a href="" className="more-info">
          Continue Reading
        </a>
      </article>
      <LatestNewsList>
        <li>
          <Icon icon={faCircleDot} />
        </li>
        <li>
          <Icon icon={faCircle} />
        </li>
        <li>
          <Icon icon={faCircle} />
        </li>
      </LatestNewsList>
    </LatestNewsContainer>
  );
};
export default LatestNews;
