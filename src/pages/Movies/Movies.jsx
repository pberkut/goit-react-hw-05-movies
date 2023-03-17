import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getSearch } from 'services/themoviedb-API';
import MoviesList from 'components/MoviesList/MoviesList';
import { nanoid } from 'nanoid';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [value, setValue] = useState(query);
  const [reqId, setReqId] = useState(null);

  useEffect(() => {
    if (!query) return;

    const abortController = new AbortController();

    const fetchSearchMovie = async query => {
      try {
        const searchMovies = await getSearch(query, abortController);
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
  }, [query, reqId]);

  const handleSubmit = e => {
    e.preventDefault();

    const queryValue = e.target.query.value.trim();

    if (queryValue === '') {
      setSearchParams({});
      setMovies([]);
      return;
    }

    setSearchParams({ query: queryValue });
    setReqId(nanoid(1));
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
          onChange={e => setValue(() => e.target.value.trimStart())}
        />
        <button type="submit">Search</button>
      </form>
      {<MoviesList movies={movies} />}
    </div>
  );
};
