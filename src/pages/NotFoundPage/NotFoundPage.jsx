import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <Link to={'/'}>Go to home</Link>
      <h2>Error 404. Not found page.</h2>
    </div>
  );
};

export default NotFoundPage;
