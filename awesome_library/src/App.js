import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import MyPage from "./components/MyPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import BookById from "./components/BookById";
import SignupSuccessful from "./components/SignupSuccessful";
import Layout from "./components/Layout";
import BookCardContainer from "./components/BookContainer";

function App() {
  return (
    <>
      <BookCardContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="mypage" element={<MyPage />} />
            <Route
              path="signup/signupsuccessful"
              element={<SignupSuccessful />}
            />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="search/book/{id}" element={<BookById />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
