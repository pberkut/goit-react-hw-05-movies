import { useEffect } from 'react';
import { getCredits } from 'services/themoviedb-API';

export const Cast = () => {
  useEffect(() => {
    const fetchCreditsMovie = async movieId => {
      try {
        const creditsMovie = await getCredits(movieId);
        console.log(creditsMovie);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCreditsMovie(739405);
  }, []);
  return <div>MovieCredits - Cast</div>;
};
