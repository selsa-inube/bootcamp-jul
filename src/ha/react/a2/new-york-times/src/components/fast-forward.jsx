import React from "react";
import styled from "styled-components";

const FastForwardContainer = styled.div`
  grid-area: 3 / 3 / 4 / 4;
`;
const FastForwardStrong = styled.strong`
  font-size: 1rem;
`;
const FastForwardList = styled.ul`
  display: flex;
  flex-direction: column;
`;
const FastForwardArticle = styled.article`
  display: grid;
  grid: 1fr 1fr/ 1fr 5rem;
  column-gap: 1.2rem;
  justify-items: end;
`;
const FastForwardTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
`;
const FastForwardText = styled.p`
  display: block;
  width: 100%;
  grid-area: 2 / 1 / 2 / 2;
  color: rgb(90, 90, 90);
  font-size: 1rem;
  margin-top: 1rem;
`;
const FastForwardImg = styled.img`
  max-width: 100%;
  height: 75%;
  grid-area: 1 / 2 / 3 /3;
`;
const FastForward = () => {
  return (
    <FastForwardContainer>
      <FastForwardStrong>Fast Forward</FastForwardStrong>
      <FastForwardList>
        <li>
          <FastForwardArticle>
            <FastForwardTitle>
              Another Grim Tally of U.S. Unemployment Is Expected; Live Business
              Updates
            </FastForwardTitle>
            <FastForwardText>
              Live Stock Market News During the Coronavirus Pandemic
            </FastForwardText>
            <FastForwardImg
              src="/img/third-article-image1.jpeg"
              alt="image of the new"
            />
          </FastForwardArticle>
        </li>
        <li>
          <FastForwardArticle>
            <FastForwardTitle>
              How the 'Pandemic' Movie and Its Falsehoods Spread Widely Online
            </FastForwardTitle>
            <FastForwardText>
              Conspirancy theories about the pandemic have gained more...
            </FastForwardText>
            <FastForwardImg
              src="./img/third-article-img2.avif"
              alt="image of the new"
            />
          </FastForwardArticle>
        </li>
        <li>
          <FastForwardArticle>
            <FastForwardTitle>
              Joe Rogan Strikes an Exclusive, Multiyear Deal With Spotify
              Premium
            </FastForwardTitle>
            <FastForwardText>
              The deal with Joe Rogan,a provocate podcast host with...
            </FastForwardText>
            <FastForwardImg src="./img/third-article-img3.webp" alt="" />
          </FastForwardArticle>
        </li>
        <li>
          <a href="" className="more-info">
            Show All
          </a>
        </li>
      </FastForwardList>
    </FastForwardContainer>
  );
};
export default FastForward;
