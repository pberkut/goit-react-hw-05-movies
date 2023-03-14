import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { NavLink, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home </NavLink>
          <NavLink to="/Movies">Movies</NavLink>
        </li>
        <li></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
      </Routes>
    </div>
  );
};
