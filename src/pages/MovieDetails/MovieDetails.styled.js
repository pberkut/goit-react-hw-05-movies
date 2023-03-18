import styled from 'styled-components';
import { NavLink as MovieOptionLink } from 'react-router-dom';

export const ImagePoster = styled.img`
  width: 400px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const MoviesOptionList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MoviesOptionItem = styled.li`
  border: 1px solid gray;
  /* padding: 10px; */
`;

export const NavLink = styled(MovieOptionLink)`
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: black;
  /* background-color: black; */
  padding: 10px;

  &.active {
    color: white;
    background-color: tomato;
  }
`;
