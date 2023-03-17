import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getDetails } from 'services/themoviedb-API';
import { ImagePoster, Wrapper } from './MovieDetails.styled';
import placeholderImage from '../../images/placeholder-movie.webp';

const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

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
      // abortController.abort();
    };
  }, [movieId]);

  const { poster_path, title, release_date, popularity, overview, genres } =
    movie;

  return (
    <div>
      <Link to="/">⬅️ go back</Link>;
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
          <p>
            User score (popularity): {Number.parseInt(popularity).toFixed(1)}
          </p>
          <p>Overview: {overview}</p>
          <p>
            Genres:{' '}
            {genres ? genres.map(({ name }) => name).join(', ') : 'No Genres'}.
          </p>
        </div>
      </Wrapper>
      <hr />
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to={`cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`reviews`}>Reviews</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};
