import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import Home from "./components/Home";
import Search from "./components/Search";
import MyPage from "./components/MyPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import BookById from "./components/BookById";
import SignupSuccessful from "./components/SignupSuccessful";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getAllBooks } from "./services/servicesBooks";
export const UserIDContext = createContext();

function App() {
  const [userID, setUserID] = useState(null); // null = logged off
  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    console.log("fetching data!");
    getAllBooks().then((books) => {
      setBookDetails(books);
    });
  }, []);

  return (
    <UserIDContext.Provider value={userID}>
      {/* This button is for login related testing during development.                 */}
      {/* See login.js (http://localhost:3000/login) how userID is read from a child.  */}
      <button onClick={() => setUserID(userID ? null : 12345678)}>
        {userID ? "Rene is logged in" : "logged off"}
      </button>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="search" element={<Search bookDetails={bookDetails} />} />
          <Route
            path="signup/signupsuccessful"
            element={<SignupSuccessful />}
          />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="mypage" element={<MyPage bookDetails={bookDetails} />} />
          <Route path="search/book/{id}" element={<BookById />} />
        </Routes>
        <Footer />
      </Router>
    </UserIDContext.Provider>
  );
}

export default App;
