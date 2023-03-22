import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  ImageMovie,
  MovieItemStyled,
  MoviesListStyled,
  TitleMovie,
  Link,
  MovieYears,
} from './MoviesList.styled';
import placeholderPoster from '../../images/placeholder-movie.webp';

const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesListStyled>
      {movies.map(({ id, title, poster_path, release_date }) => (
        <MovieItemStyled key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <ImageMovie
              src={
                poster_path
                  ? `${BASE_URL_IMAGE}${poster_path}`
                  : placeholderPoster
              }
              alt={title}
            />
            <TitleMovie className="title">{title}</TitleMovie>
            <MovieYears>{Number.parseInt(release_date)}</MovieYears>
          </Link>
        </MovieItemStyled>
      ))}
    </MoviesListStyled>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;
