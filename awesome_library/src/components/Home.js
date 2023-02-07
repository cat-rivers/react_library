import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1 className="home-title"> The Awesome Library </h1>
      <div className="bodyContainer">
        <div className="book-image">
          <img src={require("../images/book-svg.png")}></img>
        </div>
        <div className="text">
          <h3>About us</h3>
          <p>
            Libraries provide an equal opportunity for everyone to access
            information and education. Libraries play an important role in
            advocating reading culture and versatile reading skills, as well as
            improving the level of knowledge among the population. As a small,
            independent neighborhood library, we, too, try our best to promote
            active citizenship, democracy, and freedom of expression.
          </p>
          <p>
            Begin by creating an account or logging in with your ID number to
            borrow books and get access to your electronic bookshelf.
          </p>
          <p>Explore and enjoy!</p>
          <br />
          <p>Warm regards,</p>
          <p>The Awesome Library staff</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
