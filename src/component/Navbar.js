import { Outlet, Link as Navlink } from 'react-router-dom';
import logo from '../images/logo.png';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>Space Travelers Hub</h1>
        </div>
        <ul>
          <li>
            <Navlink to="/">Rockets</Navlink>
          </li>
          <li>
            <Navlink to="/Missions">Missions</Navlink>
          </li>
          <li>
            <span>|</span>
          </li>
          <li>
            <Navlink to="/Profile">My Profile</Navlink>
          </li>
        </ul>
      </nav>

      <div className="line" />

      <Outlet />
    </>
  );
}

export default Navbar;
