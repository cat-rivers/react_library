import BookCardContainer from "./components/BookContainer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./components/Home";
// import Search from "./components/Search";
// import MyPage from "./components/MyPage";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import BookById from "./components/BookById";
// import SignupSuccessful from "./components/SignupSuccessful";

function App() {
  const padding = { padding: 5 };

  return (
    <BookCardContainer />
    // <Router>
    //   <nav>
    //     <Link style={padding} to="/">
    //       Home
    //     </Link>
    //     <Link style={padding} to="/search">
    //       Search
    //     </Link>
    //     <Link style={padding} to="/login">
    //       Login
    //     </Link>
    //     <Link style={padding} to="/signup">
    //       Sign-up
    //     </Link>
    //   </nav>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/search" element={<Search />} />
    //     <Route path="/mypage" element={<MyPage />} />
    //     <Route path="/signupsuccessful" element={<SignupSuccessful />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/signup" element={<Signup />} />
    //     <Route path="/book/{id}" element={<BookById />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
