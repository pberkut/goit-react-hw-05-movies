import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getSearch } from 'services/themoviedb-API';
import MoviesList from 'components/MoviesList/MoviesList';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [value, setValue] = useState(query ?? '');

  useEffect(() => {
    const abortController = new AbortController();

    const fetchSearchMovie = async query => {
      if (abortController.current) {
        abortController.current.abort();
      }

      abortController.current = new AbortController();

      try {
        const searchMovies = await getSearch(query, abortController.current);
        const movies = searchMovies.map(({ id, title }) => ({ id, title }));
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSearchMovie(query);

    return () => {
      abortController.abort();
    };
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const nextParams = query !== `` ? { query: e.target.query.value } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <Link to="/">⬅️ go back</Link>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {<MoviesList movies={movies} />}
    </div>
  );
};
