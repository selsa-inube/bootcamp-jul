import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const HeaderContainer = styled.header`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  gap: 2rem;
`;

const ListItem = styled.li`
  font-size: 1.4rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

const HeaderButtons = styled.ul`
  display: flex;
  gap: 2rem;
`;

const HeaderButtonItem = styled.li`
  display: flex;
  align-items: center;
`;

const SubscribeContainer = styled(HeaderButtonItem)`
  height: 4rem;
  border: 2px solid rgb(81, 81, 81);
  justify-content: center;
  padding: 1rem 1.5rem;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <List>
        <ListItem>
          <Icon icon={faMagnifyingGlass} />
        </ListItem>
        <ListItem>
          <Icon icon={faBell} />
        </ListItem>
      </List>
      <Title>TheNewYorkTimes</Title>
      <HeaderButtons>
        <HeaderButtonItem>
          <a href="">SIGN IN</a>
        </HeaderButtonItem>
        <SubscribeContainer>
          <a href="">SUBSCRIBE</a>
        </SubscribeContainer>
      </HeaderButtons>
    </HeaderContainer>
  );
};

export default Header;
