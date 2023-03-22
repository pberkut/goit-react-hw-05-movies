import styled from 'styled-components';
import { Link as LinkStyled } from 'react-router-dom';

const Link = styled(LinkStyled)`
  text-decoration: none;
  color: inherit;
`;

const MoviesListStyled = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const MovieItemStyled = styled.li`
  list-style: none;
  background-color: white;
  border: 1px solid gray;
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  transition: transform 100ms linear;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

const ImageMovie = styled.img`
  display: block;
  width: 250px;
`;

const TitleMovie = styled.p`
  width: 250px;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 700;
`;

const MovieYears = styled.p`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export {
  ImageMovie,
  MoviesListStyled,
  TitleMovie,
  MovieItemStyled,
  Link,
  MovieYears,
};
