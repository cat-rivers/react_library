import { Outlet, Link } from "react-router-dom";
import "./Header.css"
import SignupPopup from "./SignupPopup";

// <Link className="menuitem" to="/signup">Sign up</Link>

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
            <Link className="menuitem" to="/login">Login</Link>
          </li>
          <li className="menuitem">
            <SignupPopup/>
           
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Header;