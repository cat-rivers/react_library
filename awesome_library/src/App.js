import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState, useEffect } from "react"
import Home from "./components/Home"
import Search from "./components/Search"
import MyPage from "./components/MyPage"
import Login from "./components/Login"
import Signup from "./components/Signup"
import BookById from "./components/BookById"
import SignupSuccessful from "./components/SignupSuccessful"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { getAllBooks } from "./services/servicesBooks";

function App() {
  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    console.log("fetching data!");
    getAllBooks().then((books) => {
      console.log(books);
      setBookDetails(books);
    });
  }, []);

  return (
    <Router>
      <Header/>
      <Routes>
          <Route index element={<Home />} />
          <Route path="search" element={<Search bookDetails={bookDetails} />} />
          <Route path="mypage" element={<MyPage/>} />
          <Route path="signup/signupsuccessful" element={<SignupSuccessful/>} />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<Signup/>} />
          <Route path="search/book/{id}" element={<BookById/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
