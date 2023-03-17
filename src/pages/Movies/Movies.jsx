import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getSearch } from 'services/themoviedb-API';
import MoviesList from 'components/MoviesList/MoviesList';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const abortController = useRef();

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

  const handleSubmit = e => {
    e.preventDefault();
    fetchSearchMovie(query);
    // setQuery('');
  };

  return (
    <div>
      <Link to="/">⬅️ go back</Link>;
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {<MoviesList movies={movies} />}
    </div>
  );
};
