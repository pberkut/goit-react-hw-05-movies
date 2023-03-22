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

  transition: transform 200ms linear;

  &:hover,
  &:focus {
    transform: scale(1.06);
  }
`;

const ImageMovie = styled.img`
  display: block;
  width: 250px;
  /* object-fit: cover; */
`;

const TitleMovie = styled.p`
  width: 250px;
  text-align: center;
`;

export { ImageMovie, MoviesListStyled, TitleMovie, MovieItemStyled, Link };
