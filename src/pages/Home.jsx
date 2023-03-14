import { useEffect } from 'react';
import { getTrendingToday } from '../services/themoviedb-API';

export const Home = () => {
  useEffect(() => {
    const fetchTrendingToday = async () => {
      try {
        const trendingMovies = await getTrendingToday();
        console.log(trendingMovies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrendingToday();
  }, []);

  return <div>Home</div>;
};
