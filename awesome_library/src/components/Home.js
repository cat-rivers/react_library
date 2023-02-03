import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1 className="home-title"> The Amazing Library </h1>
      <div className="bodyContainer">
        <div className="book-image">
          <img src={require("./book-svg.png")}></img>
        </div>
        <div className="text">
          <h3>About us:</h3>
          <p>
            The aim of the libraries is equal opportunities for the population
            for education and culture, as well as possible access to and use of
            information. Libraries are important learning actors in the
            promotion of reading culture and versatile reading skills, and
            enable living. Library services and facilities promote active
            citizenship, democracy and freedom of expression.
          </p>
          <p>
            Log in with your library card information and you can e.g. borrow
            books and get access to your own electronic bookshelf. If you cannot
            log in with the information you entered, please contact your library
            staff.
          </p>
          <p>***</p>
          <p>
            Yours,
            <br />
            your Awesome Library team Red
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
