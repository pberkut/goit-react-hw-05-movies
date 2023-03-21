import styled from 'styled-components';
import { NavLink as NavLinkStyled } from 'react-router-dom';

export const NavLink = styled(NavLinkStyled)`
  text-decoration: none;
  color: black;
  border: 1px solid black;
  padding: 5px;
  border-radius: 10px;

  &.active {
    background-color: tomato;
    color: black;
  }
`;

export const Nav = styled.nav`
  font-size: 24px;
  gap: 30px;
  display: flex;
  list-style: none;
  font-weight: 700;
`;
