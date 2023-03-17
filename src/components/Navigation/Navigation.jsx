import { Nav, NavLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
      <NavLink to="/">Home </NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </Nav>
  );
};

export default Navigation;
