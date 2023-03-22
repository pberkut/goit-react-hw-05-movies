import { useEffect, useState } from 'react';
import { getTrendingToday } from '../../services/themoviedb-API';
import MoviesList from '../../components/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchTrendingToday = async () => {
      try {
        const trendingMovies = await getTrendingToday(abortController);
        const movies = trendingMovies.map(
          ({ id, title, poster_path, release_date, vote_average }) => ({
            id,
            title,
            poster_path,
            release_date,
            vote_average,
          })
        );
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
    <>
      <h1>Trending movies today</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
