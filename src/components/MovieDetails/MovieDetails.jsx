import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getDetails } from 'services/themoviedb-API';
import { ImagePoster } from './MovieDetails.styled';
import undefinedImage from '../../images/undefined.webp';

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
      abortController.abort();
    };
  }, [movieId]);

  const { poster_path, title, release_date, popularity, overview, genres } =
    movie;

  return (
    <div>
      <Link to="/">⬅️ go back</Link>
      <hr />
      <div>
        <ImagePoster
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : undefinedImage
          }
          alt={title}
        />
        <p>
          <span>{title}</span>
          <span>({Number.parseInt(release_date)})</span>
        </p>
        <p>User score (popularity): {Number.parseInt(popularity).toFixed(1)}</p>
        <p>Overview: {overview}</p>
        <p>
          Genres:{' '}
          {genres ? genres.map(({ name }) => name).join(', ') : 'No Genres'}.
        </p>
      </div>
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
