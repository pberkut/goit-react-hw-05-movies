const handleResponse = response =>
  response.map(({ id, title, poster_path, release_date }) => ({
    id,
    title,
    poster_path,
    release_date,
  }));

export default handleResponse;
