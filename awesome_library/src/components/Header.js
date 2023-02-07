import { Outlet, Link } from "react-router-dom";
import "./Header.css";
import LoginPopup from "./LoginPopup";
import SignupPopup from "./SignupPopup";
import { useContext } from "react";
import { UserIDContext } from ".././App";
import LogoutPopup from "./LogoutPopup";

const Header = () => {
  const userData = useContext(UserIDContext);
  return (
    <div>
      <nav className="navbar">
        {/*<div className="navbar-links">*/}
          <ul className="links" id="links">
            {userData.data ? (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/search">Search</Link>
                </li>
                <li>
                  <Link to="/mypage">My Page</Link>
                </li>
                <li>
                  <LogoutPopup />
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/search" style={{ textDecoration: "none" }}>
                    Search
                  </Link>
                </li>
                <li>
                  <LoginPopup />
                </li>
                <li>
                  <SignupPopup />
                </li>
              </>
            )}
          </ul>
        {/*</div>*/}
      </nav>
      <div className="dividing-bar"></div>

      <Outlet />
      
      <input type="checkbox" id="hamburger-input" class="burger-shower" />
      <label id = "hamburger-menu" for="hamburger-input">
        <nav id = "sidebar-menu">
          <h3> Menu </h3>
          <ul className="links" id="links">
          {userData.data ? (
              <>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/search">Search</Link> </li>
                <li> <Link to="/mypage">My Page</Link> </li>
                <li> <LogoutPopup /> </li>
              </>
            ) : (
              <>
                <li> <Link to="/" style={{ textDecoration: "none" }}> Home </Link> </li>
                <li> <Link to="/search" style={{ textDecoration: "none" }}> Search </Link> </li>
                <li> < LoginPopup /> </li>
                <li> < SignupPopup /> </li>
              </>
            )}
          </ul>
        </nav>
      </label>

      <div className="overlay"></div>
    </div>
  );
};

export default Header;
