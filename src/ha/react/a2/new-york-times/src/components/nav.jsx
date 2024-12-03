import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faGripLinesVertical,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
const NavContainer = styled.nav`
  grid-area: 1 / 1 / 3 / 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 0 1.5rem 0;
  background-color: white;
`;
const Icon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  margin: 0 auto;
`;
const Nav = () => {
  return (
    <NavContainer>
      <Icon icon={faEllipsis} />
      <Icon icon={faGripLinesVertical} />
      <Icon icon={faMoon} />
    </NavContainer>
  );
};

export default Nav;
