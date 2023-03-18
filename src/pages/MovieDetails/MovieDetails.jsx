import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getDetails } from 'services/themoviedb-API';
import {
  ImagePoster,
  MoviesOptionItem,
  MoviesOptionList,
  Wrapper,
  NavLink,
} from './MovieDetails.styled';
import placeholderImage from '../../images/placeholder-movie.webp';

const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const abortController = new AbortController();

    const fetchDetailsMovie = async movieId => {
      try {
        const findMovie = await getDetails(movieId, abortController);
        setMovie(findMovie);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDetailsMovie(movieId);

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  return (
    <div>
      <Link to={backLinkLocationRef.current}>⬅️ go back</Link>
      <hr />
      <Wrapper>
        <div>
          <ImagePoster
            src={
              poster_path ? `${BASE_URL_IMAGE + poster_path}` : placeholderImage
            }
            alt={title}
          />
        </div>
        <div>
          <p>
            <span>{title}</span>
            <span>({Number.parseInt(release_date)})</span>
          </p>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <p>Overview: {overview}</p>
          <p>
            Genres:{' '}
            {genres ? genres.map(({ name }) => name).join(', ') : 'No Genres'}.
          </p>
        </div>
      </Wrapper>
      <hr />
      <h2>Additional information</h2>
      <MoviesOptionList>
        <MoviesOptionItem>
          <NavLink to={`cast`}>Cast</NavLink>
        </MoviesOptionItem>
        <MoviesOptionItem>
          <NavLink to={`reviews`}>Reviews</NavLink>
        </MoviesOptionItem>
      </MoviesOptionList>
      <hr />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
