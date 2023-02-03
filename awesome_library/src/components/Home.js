import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="bodyContainer">
        <h1 className="home-title"> The Amazing Library </h1>
        <p>
          <b>About us:</b>
        </p>

        <p>
          The aim of the libraries is equal opportunities for the population for
          education and culture, as well as possible access to and use of
          information.
        </p>
        <p>
          Libraries are important learning actors in the promotion of reading
          culture and versatile reading skills, and enable living.
        </p>
        <p>
          Library services and facilities promote active citizenship, democracy
          and freedom of expression.
        </p>

        <p>
          Log in with your library card information and you can e.g. borrow
          books and get access to your own electronic bookshelf.
        </p>
        <p>
          If you cannot log in with the information you entered, please contact
          your library staff.
        </p>
        <p>***</p>
        <p>
          Yours,
          <br />
          your Awesome Library team Red
        </p>
      </div>
    </div>
  );
};

export default Home;
