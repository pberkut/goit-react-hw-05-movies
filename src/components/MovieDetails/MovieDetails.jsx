import { useEffect } from 'react';
import { getDetails } from 'services/themoviedb-API';

export const MovieDetails = () => {
  useEffect(() => {
    const fetchDetailsMovie = async movieId => {
      try {
        const searchMovie = await getDetails(movieId);
        console.log(searchMovie);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDetailsMovie(739405);
  }, []);

  return <div>MovieDetails</div>;
};
