import { Outlet, Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav className="navbar">
      <div className="logo">
        <img src="../logo.png" alt="logo" />
        <h1>Space Travelers Hub</h1>
      </div>
      <ul>
        <li>
          <Link to="/">Rockets</Link>
        </li>
        <li>
          <Link to="/Missions">Missions</Link>
        </li>
        <li>
          <span>|</span>
        </li>
        <li>
          <Link to="/Profile">My Profile</Link>
        </li>
      </ul>
    </nav>

    <div className="line" />

    <Outlet />
  </>
);

export default Navbar;
