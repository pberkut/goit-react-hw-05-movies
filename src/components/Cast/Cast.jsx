import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'services/themoviedb-API';
import { ImageCast } from './Cast.styled.js';
import undefined from '../../images/undefined.webp';

export const Cast = () => {
  const [casts, setCasts] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchCreditsMovie = async movieId => {
      try {
        const creditsMovie = await getCredits(movieId);
        const casts = creditsMovie.map(
          ({ id, name, character, profile_path }) => ({
            id,
            name,
            character,
            profile_path,
          })
        );
        setCasts(casts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCreditsMovie(movieId);
  }, [movieId]);

  return (
    <div>
      MovieCredits - Cast
      <ul>
        {casts &&
          casts.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <p>Name: {name}</p>

              <ImageCast
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : undefined
                }
                alt={name}
              />

              <p>Character: {character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
