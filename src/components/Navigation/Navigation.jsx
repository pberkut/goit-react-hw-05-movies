import { Nav, NavLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav className="nav-list">
      <NavLink to="/" className="nav-item">
        Home{' '}
      </NavLink>
      <NavLink to="/movies" className="nav-item">
        Movies
      </NavLink>
    </Nav>
  );
};

export default Navigation;
