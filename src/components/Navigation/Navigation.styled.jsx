import styled from 'styled-components';
import { NavLink as NavLinkStyled } from 'react-router-dom';

export const NavLink = styled(NavLinkStyled)`
  text-decoration: none;
  color: black;

  &.active {
    color: red;
  }
`;

export const Nav = styled.nav`
  font-size: 24px;
  gap: 30px;
  display: flex;
  list-style: none;
  font-weight: 700;
`;
