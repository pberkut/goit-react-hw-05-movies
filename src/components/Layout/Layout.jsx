import Navigation from 'components/Navigation';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <hr />
      <main>
        <Outlet />
      </main>
      <footer>©️ 2023</footer>
    </>
  );
};
