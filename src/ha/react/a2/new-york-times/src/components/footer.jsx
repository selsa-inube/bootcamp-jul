import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const FooterContainer = styled.footer`
  border-top: 1px solid rgb(119, 119, 119);
  grid-area: 3 / 2 / 4 /3;
`;
const FooterList = styled.ul`
  display: flex;
  width: 35%;
  justify-content: space-between;
  align-items: center;
`;
const FooterTitle = styled.h5`
  font-size: 1.1rem;
  color: black;
`;
const FooterElement = styled.li`
  color: rgb(56, 56, 56);
`;
const FooterSpan = styled.span`
  display: block;
  margin: auto 0;
`;
const FooterAnchor = styled.a`
  color: rgb(56, 56, 56);
  margin-right: 0.8rem;
`;
const Icon = styled(FontAwesomeIcon)`
  color: rgb(56, 56, 56);
`;
const Footer = () => {
  return (
    <FooterContainer>
      <FooterList>
        <FooterElement>
          <FooterTitle>MARKET SNAPSHOT</FooterTitle>
          <p>6:07 A.M</p>
        </FooterElement>
        <FooterElement>Futures</FooterElement>
        <FooterElement>Americas</FooterElement>
        <FooterElement>Europe</FooterElement>
        <FooterElement>Asia</FooterElement>
        <FooterElement>Commodities</FooterElement>
      </FooterList>
      <FooterSpan>
        <FooterAnchor>FULL MARKET OVERVIEW</FooterAnchor>
        <Icon icon={faAngleRight} />
      </FooterSpan>
    </FooterContainer>
  );
};
export default Footer;
