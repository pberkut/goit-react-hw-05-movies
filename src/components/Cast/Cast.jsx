import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'services/themoviedb-API';

export const Cast = () => {
  const [casts, setCasts] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchCreditsMovie = async movieId => {
      try {
        const creditsMovie = await getCredits(movieId);
        const casts = creditsMovie.map(({ name, character, profile_path }) => ({
          name,
          character,
          profile_path,
        }));
        setCasts(casts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCreditsMovie(movieId);
  }, [movieId]);

  console.log(casts);
  return (
    <div>
      MovieCredits - Cast
      <ul>
        {casts &&
          casts.map(({ name, character, profile_path }) => (
            <li key={name}>
              <p>Name: {name}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
              />
              <p>Character: {character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
