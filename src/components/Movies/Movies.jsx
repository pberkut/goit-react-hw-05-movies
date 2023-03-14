import { useEffect } from 'react';
import { getSearch } from 'services/themoviedb-API';

export const MoviesList = () => {
  useEffect(() => {
    const fetchSearchMovie = async query => {
      try {
        const searchMovie = await getSearch(query);
        console.log(searchMovie);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSearchMovie('man');
  }, []);

  return <div></div>;
};
