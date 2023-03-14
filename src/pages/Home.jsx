import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingToday } from '../services/themoviedb-API';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchTrendingToday = async () => {
      try {
        const trendingMovies = await getTrendingToday(abortController);
        const movies = trendingMovies.map(({ id, title }) => ({ id, title }));
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrendingToday();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};