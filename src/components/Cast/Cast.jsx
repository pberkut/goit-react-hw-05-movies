import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'services/themoviedb-API';
import { ImageCast } from './Cast.styled.js';
import placeholderImage from '../../images/placeholder-cast.webp';

const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500';

export const Cast = () => {
  const [casts, setCasts] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    const fetchCreditsMovie = async movieId => {
      try {
        const creditsMovie = await getCredits(movieId, abortController);
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
    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <div>
      MovieCredits - Cast
      <ul>
        {casts.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <p>Name: {name}</p>

            <ImageCast
              src={
                profile_path
                  ? `${BASE_URL_IMAGE + profile_path}`
                  : placeholderImage
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
