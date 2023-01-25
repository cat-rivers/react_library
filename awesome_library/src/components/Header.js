import { Outlet, Link } from "react-router-dom";
import "./Header.css"
import LoginPopup from "./LoginPopup";

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="menuitem">
          <li className="menuitem">
            <Link className="menuitem" to="/">Home</Link>
          </li>
          <li className="menuitem">
            <Link className="menuitem" to="/search">Search</Link>
          </li>
          <li className="menuitem">
            <LoginPopup/>
          </li>
          <li className="menuitem">
            <Link className="menuitem" to="/signup">Sign up</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Header;