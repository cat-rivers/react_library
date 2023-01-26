import { Outlet, Link } from "react-router-dom";
import "./Header.css";
import LoginPopup from "./LoginPopup";
import SignupPopup from "./SignupPopup";
<<<<<<< HEAD
import "./libraryLogo.png";
=======
import { useContext } from "react"
import { UserIDContext } from ".././App";
import LogoffPopup from "./LogoffPopup";
>>>>>>> main

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="left-side">
          <li>
            {" "}
            <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
              Home
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link
              to="/search"
              style={{ textDecoration: "none", color: "blue" }}
            >
              Search
            </Link>{" "}
          </li>
        </ul>

        <img src={require("./libraryLogo.png")} alt="Library Logo" />

        <ul className="right-side">
<<<<<<< HEAD
          <li>
            {" "}
            <LoginPopup />{" "}
          </li>
          <li>
            {" "}
            <SignupPopup />{" "}
          </li>
=======
        { useContext(UserIDContext)
            ? <><li> <Link to="/mypage" style={{ textDecoration: "none", color:"blue" }}>My Page</Link> </li> 
                <li> <LogoffPopup/> </li>
              </>
            : <><li> <LoginPopup/> </li> 
                <li> <SignupPopup/> </li>
              </>
        }
>>>>>>> main
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Header;
