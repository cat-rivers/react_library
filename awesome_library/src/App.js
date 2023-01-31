import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import Home from "./components/Home";
import Search from "./components/Search";
import MyPage from "./components/MyPage";
import Signup from "./components/Signup";
import BookById from "./components/BookById";
import SignupSuccessful from "./components/SignupSuccessful";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getAllBooks } from "./services/servicesBooks";
export const UserIDContext = createContext();

function App() {
  const [userData, setUserData] = useState(null); // null = logged off
  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    console.log("fetching data!");
    getAllBooks().then((books) => {
      setBookDetails(books);
    });
  }, []);

  return (
    <UserIDContext.Provider value={{ data: userData, set: setUserData }}>
      {userData && <button>{userData.name}</button>}
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="search" element={<Search bookDetails={bookDetails} />} />
          <Route
            path="signup/signupsuccessful"
            element={<SignupSuccessful />}
          />
          <Route path="signup" element={<Signup />} />
          {/* <Route path="mypage" element={<MyPage />} /> */}
          <Route path="search/book/{id}" element={<BookById />} />
        </Routes>
        <Footer />
      </Router>
    </UserIDContext.Provider>
  );
}

export default App;
