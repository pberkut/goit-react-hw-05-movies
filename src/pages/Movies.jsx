import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getSearch } from 'services/themoviedb-API';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const fetchSearchMovie = async query => {
    try {
      const searchMovies = await getSearch(query);
      const movies = searchMovies.map(({ id, title }) => ({ id, title }));
      setMovies(movies);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchSearchMovie(query);
    setQuery('');
  };

  return (
    <div>
      <hr />
      <Link to="/">⬅️ go back</Link>
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
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
