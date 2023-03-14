import { Outlet } from 'react-router-dom';
import { Nav, NavLink } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <header>
        <Nav>
          <NavLink to="/">Home </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </Nav>
      </header>
      <hr />
      <main>
        <Outlet />
      </main>
      <footer>2023</footer>
    </>
  );
};
