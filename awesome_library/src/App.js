import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import Home from "./components/Home";
import Search from "./components/Search";
import MyPage from "./components/MyPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import "./App.css";

import { getAllBooks } from "./services/servicesBooks";

function App() {
  const [userData, setUserData] = useState(null); // null = logged off
  
  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    getAllBooks().then((books) => {
      setBookDetails(books);
    });
  }, []);


  return (
    <UserIDContext.Provider value={{ data: userData, set: setUserData }}>
      <Router>
        <Header />
        <div className="app-body">
          <Routes>
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="mypage" element={<MyPage bookDetails={bookDetails} setBookDetails={setBookDetails}/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </UserIDContext.Provider>
  );
}

export const UserIDContext = createContext();
export default App;
