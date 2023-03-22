import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  ImageMovie,
  MovieItemStyled,
  MoviesListStyled,
  TitleMovie,
  Link,
} from './MoviesList.styled';

const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesListStyled>
      {movies.map(({ id, title, poster_path, release_date, vote_average }) => (
        <MovieItemStyled key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <ImageMovie src={`${BASE_URL_IMAGE}${poster_path}`} alt={title} />
            <TitleMovie>{title}</TitleMovie>
            <p>({Number.parseInt(release_date)})</p>
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
