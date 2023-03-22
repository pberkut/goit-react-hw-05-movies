import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'services/themoviedb-API';
import {
  CastCharacter,
  CastItem,
  CastList,
  CastName,
  ImageCast,
  Title,
} from './Cast.styled.js';
import placeholderImage from '../../images/placeholder-cast.webp';

const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
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
      <Title>MovieCredits - Cast</Title>
      <CastList>
        {casts.map(({ id, name, character, profile_path }) => (
          <CastItem key={id}>
            <CastName>{name}</CastName>

            <ImageCast
              src={
                profile_path
                  ? `${BASE_URL_IMAGE + profile_path}`
                  : placeholderImage
              }
              alt={name}
            />

            <CastCharacter>Character: {character}</CastCharacter>
          </CastItem>
        ))}
      </CastList>
    </div>
  );
};

export default Cast;
