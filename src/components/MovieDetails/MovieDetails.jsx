import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getDetails } from 'services/themoviedb-API';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchDetailsMovie = async movieId => {
      try {
        const findMovie = await getDetails(movieId);
        setMovie(findMovie);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDetailsMovie(movieId);
  }, [movieId]);

  console.log(movie);

  const { poster_path, title, release_date, popularity, overview, genres } =
    movie;

  console.log(genres);
  return (
    <div>
      <Link to="/">⬅️ go back</Link>
      <hr />
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
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
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};
